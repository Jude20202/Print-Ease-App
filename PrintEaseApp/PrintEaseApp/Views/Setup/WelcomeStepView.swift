import SwiftUI

struct WelcomeStepView: View {
    let onNext: () -> Void

    var body: some View {
        VStack(spacing: 24) {
            VStack(spacing: 8) {
                Text("Welcome to Print Ease Setup")
                    .font(.headingLarge)
                    .foregroundColor(.brandCharcoal)
                    .multilineTextAlignment(.center)
                Text("Let's get your printer connected to WiFi in just a few steps.")
                    .font(.bodyRegular)
                    .foregroundColor(.gray)
                    .multilineTextAlignment(.center)
            }

            VStack(spacing: 16) {
                checkItem("Plug Print Ease into printer")
                checkItem("Connect power to Print Ease")
                checkItem("Make sure your phone is nearby")
            }
            .padding(20)
            .background(Color.gray.opacity(0.06))
            .cornerRadius(14)

            Button(action: onNext) {
                Text("Start Setup")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 14)
                    .background(Color.brandBlue)
                    .cornerRadius(12)
            }
        }
        .padding(24)
        .background(Color.white)
        .cornerRadius(16)
        .shadow(color: .black.opacity(0.05), radius: 8, y: 4)
    }

    private func checkItem(_ text: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: "checkmark.circle.fill")
                .foregroundColor(.brandBlue)
                .font(.system(size: 20))
            Text(text)
                .font(.bodyRegular)
                .foregroundColor(.brandCharcoal)
            Spacer()
        }
    }
}
