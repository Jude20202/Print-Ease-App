import SwiftUI

struct DeviceDetectedView: View {
    @Binding var isLoading: Bool
    let onConnect: () -> Void

    private let device = MockData.detectedDevice

    var body: some View {
        VStack(spacing: 24) {
            VStack(spacing: 8) {
                Text("Print Ease Device Detected")
                    .font(.headingLarge)
                    .foregroundColor(.brandCharcoal)
                    .multilineTextAlignment(.center)
                Text("We found a new Print Ease adapter nearby.")
                    .font(.bodyRegular)
                    .foregroundColor(.gray)
            }

            VStack(spacing: 14) {
                HStack(spacing: 12) {
                    ZStack {
                        Circle()
                            .fill(Color.brandBlueLight)
                            .frame(width: 40, height: 40)
                        Image(systemName: "wifi")
                            .foregroundColor(.brandBlue)
                    }
                    Text(device.name)
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundColor(.brandCharcoal)
                    Spacer()
                }

                HStack(spacing: 32) {
                    VStack(alignment: .leading, spacing: 2) {
                        Text("Signal")
                            .font(.caption)
                            .foregroundColor(.gray)
                        Text(device.signal.rawValue)
                            .font(.system(size: 14, weight: .medium))
                            .foregroundColor(.brandCharcoal)
                    }
                    VStack(alignment: .leading, spacing: 2) {
                        Text("Status")
                            .font(.caption)
                            .foregroundColor(.gray)
                        Text("Ready to configure")
                            .font(.system(size: 14, weight: .medium))
                            .foregroundColor(.brandCharcoal)
                    }
                    Spacer()
                }
            }
            .padding(16)
            .overlay(RoundedRectangle(cornerRadius: 12).stroke(Color.gray.opacity(0.2)))

            Button(action: onConnect) {
                HStack(spacing: 8) {
                    if isLoading {
                        ProgressView().tint(.white).scaleEffect(0.8)
                        Text("Connecting...")
                    } else {
                        Text("Connect")
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

            Button("Can't find your device?") {}
                .font(.bodySmall)
                .foregroundColor(.brandBlue)
        }
        .padding(24)
        .background(Color.white)
        .cornerRadius(16)
        .shadow(color: .black.opacity(0.05), radius: 8, y: 4)
    }
}
