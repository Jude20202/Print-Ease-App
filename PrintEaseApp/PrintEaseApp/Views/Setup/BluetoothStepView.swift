import SwiftUI

struct BluetoothStepView: View {
    @Binding var isLoading: Bool
    let onStartDiscovery: () -> Void

    var body: some View {
        VStack(spacing: 24) {
            ZStack {
                Circle()
                    .fill(Color.brandBlueLight)
                    .frame(width: 60, height: 60)
                Image(systemName: "wave.3.right")
                    .font(.system(size: 26))
                    .foregroundColor(.brandBlue)
            }

            VStack(spacing: 8) {
                Text("Enable Bluetooth")
                    .font(.headingLarge)
                    .foregroundColor(.brandCharcoal)
                Text("Make sure Bluetooth is enabled on your device to discover nearby PrintEase adapters.")
                    .font(.bodyRegular)
                    .foregroundColor(.gray)
                    .multilineTextAlignment(.center)
            }

            HStack {
                Image(systemName: "info.circle.fill")
                    .foregroundColor(.brandBlue)
                    .font(.system(size: 14))
                Text("Ensure your device's Bluetooth is turned on before proceeding")
                    .font(.bodySmall)
                    .foregroundColor(.brandBlue)
            }
            .padding(14)
            .frame(maxWidth: .infinity)
            .background(Color.brandBlueLight)
            .cornerRadius(10)

            Button(action: onStartDiscovery) {
                HStack(spacing: 8) {
                    if isLoading {
                        ProgressView()
                            .tint(.white)
                            .scaleEffect(0.8)
                        Text("Searching...")
                    } else {
                        Text("Start Discovery")
                    }
                }
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 14)
                .background(isLoading ? Color.brandBlue.opacity(0.6) : Color.brandBlue)
                .cornerRadius(12)
            }
            .disabled(isLoading)
        }
        .padding(24)
        .background(Color.white)
        .cornerRadius(16)
        .shadow(color: .black.opacity(0.05), radius: 8, y: 4)
    }
}
