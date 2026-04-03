import SwiftUI

struct SettingsView: View {
    @AppStorage("userName") private var userName = ""
    @AppStorage("userEmail") private var userEmail = ""
    @AppStorage("userCompany") private var userCompany = ""
    @AppStorage("analyticsSubscribed") private var analyticsSubscribed = false
    @AppStorage("setupComplete") private var setupComplete = true

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 16) {
                    // Profile
                    sectionCard {
                        HStack(spacing: 4) {
                            Image(systemName: "person.circle.fill")
                                .foregroundColor(.brandBlue)
                            Text("Profile")
                                .font(.headingSmall)
                                .foregroundColor(.brandCharcoal)
                        }
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .padding(.bottom, 4)

                        infoRow(label: "Name", value: userName)
                        infoRow(label: "Email", value: userEmail)
                        if !userCompany.isEmpty {
                            infoRow(label: "Company", value: userCompany)
                        }
                    }

                    // Subscription
                    sectionCard {
                        HStack(spacing: 4) {
                            Image(systemName: "creditcard.fill")
                                .foregroundColor(.brandOrange)
                            Text("Subscription")
                                .font(.headingSmall)
                                .foregroundColor(.brandCharcoal)
                        }
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .padding(.bottom, 4)

                        HStack {
                            VStack(alignment: .leading, spacing: 2) {
                                Text(analyticsSubscribed ? "Analytics Pro" : "Free Plan")
                                    .font(.system(size: 14, weight: .medium))
                                    .foregroundColor(.brandCharcoal)
                                Text(analyticsSubscribed ? "$5/month per adapter" : "Basic setup and printing only")
                                    .font(.caption)
                                    .foregroundColor(.gray)
                            }
                            Spacer()
                            BadgeView(
                                text: analyticsSubscribed ? "Active" : "Free",
                                variant: analyticsSubscribed ? .active : .inactive
                            )
                        }
                    }

                    // Reset
                    Button {
                        userName = ""
                        userEmail = ""
                        userCompany = ""
                        analyticsSubscribed = false
                        setupComplete = false
                    } label: {
                        HStack {
                            Image(systemName: "arrow.counterclockwise")
                            Text("Reset & Run Setup Again")
                        }
                        .font(.system(size: 14, weight: .medium))
                        .foregroundColor(.red)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 14)
                        .background(Color.white)
                        .cornerRadius(14)
                        .shadow(color: .black.opacity(0.04), radius: 4, y: 2)
                    }
                }
                .padding(16)
            }
            .background(Color.brandOffWhite)
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .principal) {
                    LogoView(size: 18)
                }
            }
        }
    }

    private func sectionCard<Content: View>(@ViewBuilder content: () -> Content) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            content()
        }
        .padding(16)
        .background(Color.white)
        .cornerRadius(14)
        .shadow(color: .black.opacity(0.04), radius: 4, y: 2)
    }

    private func infoRow(label: String, value: String) -> some View {
        HStack {
            Text(label)
                .font(.bodyRegular)
                .foregroundColor(.gray)
            Spacer()
            Text(value)
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(.brandCharcoal)
        }
        .padding(.vertical, 4)
    }
}
