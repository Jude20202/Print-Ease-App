import SwiftUI

struct SuccessStepView: View {
    let onOpenDashboard: () -> Void

    var body: some View {
        VStack(spacing: 24) {
            ZStack {
                Circle()
                    .fill(Color.brandBlueLight)
                    .frame(width: 60, height: 60)
                Image(systemName: "checkmark.circle.fill")
                    .font(.system(size: 30))
                    .foregroundColor(.brandBlue)
            }

            Text("Your Printer is Now Wireless 🎉")
                .font(.headingLarge)
                .foregroundColor(.brandCharcoal)
                .multilineTextAlignment(.center)

            VStack(spacing: 14) {
                checkItem("Print from any device on your network")
                checkItem("Monitor usage from your dashboard")
                checkItem("No driver reinstall required")
            }

            VStack(spacing: 12) {
                Button(action: onOpenDashboard) {
                    Text("Open Dashboard")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 14)
                        .background(Color.brandBlue)
                        .cornerRadius(12)
                }

                Button {} label: {
                    Text("Print Test Page")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundColor(.brandCharcoal)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 14)
                        .overlay(RoundedRectangle(cornerRadius: 12).stroke(Color.gray.opacity(0.3)))
                }
            }

            Text("Setup completed in 2 minutes")
                .font(.caption)
                .foregroundColor(.gray.opacity(0.6))
        }
        .padding(24)
        .background(Color.white)
        .cornerRadius(16)
        .shadow(color: .black.opacity(0.05), radius: 8, y: 4)
    }

    private func checkItem(_ text: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: "checkmark.circle.fill")
                .foregroundColor(.green)
                .font(.system(size: 18))
            Text(text)
                .font(.bodyRegular)
                .foregroundColor(.brandCharcoal)
            Spacer()
        }
    }
}
