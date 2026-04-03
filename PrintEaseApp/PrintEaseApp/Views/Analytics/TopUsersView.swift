import SwiftUI

struct TopUsersView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Top Users")
                .font(.headingSmall)
                .foregroundColor(.brandCharcoal)

            VStack(spacing: 0) {
                // Header row
                HStack {
                    Text("USER")
                        .frame(maxWidth: .infinity, alignment: .leading)
                    Text("JOBS")
                        .frame(width: 40, alignment: .trailing)
                    Text("PAGES")
                        .frame(width: 50, alignment: .trailing)
                    Text("COST")
                        .frame(width: 55, alignment: .trailing)
                    Text("STATUS")
                        .frame(width: 65, alignment: .center)
                }
                .font(.system(size: 10, weight: .medium))
                .foregroundColor(.gray)
                .padding(.vertical, 8)
                .padding(.horizontal, 4)

                Divider()

                ForEach(MockData.topUsers) { user in
                    HStack {
                        VStack(alignment: .leading, spacing: 1) {
                            Text(user.name)
                                .font(.system(size: 13, weight: .medium))
                                .foregroundColor(.brandCharcoal)
                            Text(user.team)
                                .font(.system(size: 10))
                                .foregroundColor(.gray)
                        }
                        .frame(maxWidth: .infinity, alignment: .leading)

                        Text("\(user.jobs)")
                            .font(.system(size: 13))
                            .foregroundColor(.brandCharcoal)
                            .frame(width: 40, alignment: .trailing)

                        Text("\(user.pages)")
                            .font(.system(size: 13))
                            .foregroundColor(.brandCharcoal)
                            .frame(width: 50, alignment: .trailing)

                        Text(user.cost)
                            .font(.system(size: 13))
                            .foregroundColor(.brandCharcoal)
                            .frame(width: 55, alignment: .trailing)

                        BadgeView(
                            text: user.status.rawValue,
                            variant: badgeVariant(for: user.status)
                        )
                        .frame(width: 65, alignment: .center)
                    }
                    .padding(.vertical, 10)
                    .padding(.horizontal, 4)

                    if user.id != MockData.topUsers.last?.id {
                        Divider()
                    }
                }
            }
        }
        .padding(16)
        .background(Color.white)
        .cornerRadius(14)
        .shadow(color: .black.opacity(0.04), radius: 4, y: 2)
    }

    private func badgeVariant(for status: UserStatus) -> BadgeView.BadgeVariant {
        switch status {
        case .active: return .active
        case .warning: return .warning
        case .inactive: return .inactive
        }
    }
}
