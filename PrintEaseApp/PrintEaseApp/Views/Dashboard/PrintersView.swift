import SwiftUI

struct PrintersView: View {
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    Text("My Printers")
                        .font(.headingLarge)
                        .foregroundColor(.brandCharcoal)
                    Text("Your connected Print Ease adapters")
                        .font(.bodyRegular)
                        .foregroundColor(.gray)

                    ForEach(MockData.userDevices) { device in
                        VStack(spacing: 14) {
                            HStack(spacing: 12) {
                                ZStack {
                                    RoundedRectangle(cornerRadius: 10)
                                        .fill(Color.brandBlueLight)
                                        .frame(width: 40, height: 40)
                                    Image(systemName: "wifi")
                                        .foregroundColor(.brandBlue)
                                }
                                VStack(alignment: .leading, spacing: 2) {
                                    Text(device.name)
                                        .font(.system(size: 15, weight: .semibold))
                                        .foregroundColor(.brandCharcoal)
                                    Text(device.printerModel)
                                        .font(.caption)
                                        .foregroundColor(.gray)
                                }
                                Spacer()
                                BadgeView(
                                    text: device.status.rawValue,
                                    variant: device.status == .online ? .online : .offline
                                )
                            }

                            Divider()

                            HStack {
                                statColumn(value: "\(device.totalPrints)", label: "Prints")
                                Spacer()
                                statColumn(value: "\(device.totalPages)", label: "Pages")
                                Spacer()
                                statColumn(value: device.signal.rawValue, label: "Signal")
                            }
                        }
                        .padding(16)
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

    private func statColumn(value: String, label: String) -> some View {
        VStack(spacing: 2) {
            Text(value)
                .font(.system(size: 17, weight: .bold))
                .foregroundColor(.brandCharcoal)
            Text(label)
                .font(.caption)
                .foregroundColor(.gray)
        }
        .frame(maxWidth: .infinity)
    }
}
