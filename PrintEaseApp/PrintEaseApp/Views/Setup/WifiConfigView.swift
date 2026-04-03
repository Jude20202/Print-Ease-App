import SwiftUI

struct WifiConfigView: View {
    @Binding var selectedNetwork: String
    @Binding var password: String
    @Binding var isLoading: Bool
    let onConnect: () -> Void

    var body: some View {
        VStack(spacing: 24) {
            VStack(spacing: 8) {
                Text("Connect Print Ease to WiFi")
                    .font(.headingLarge)
                    .foregroundColor(.brandCharcoal)
                    .multilineTextAlignment(.center)
                Text("Choose the network you want your printer to use.")
                    .font(.bodyRegular)
                    .foregroundColor(.gray)
                    .multilineTextAlignment(.center)
            }

            VStack(alignment: .leading, spacing: 16) {
                VStack(alignment: .leading, spacing: 6) {
                    Text("WiFi Network")
                        .font(.system(size: 13, weight: .medium))
                        .foregroundColor(.brandCharcoal)
                    Picker("Network", selection: $selectedNetwork) {
                        ForEach(MockData.wifiNetworks) { network in
                            Text(network.ssid).tag(network.ssid)
                        }
                    }
                    .pickerStyle(.menu)
                    .padding(10)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .background(Color.gray.opacity(0.06))
                    .cornerRadius(10)
                }

                VStack(alignment: .leading, spacing: 6) {
                    Text("Password")
                        .font(.system(size: 13, weight: .medium))
                        .foregroundColor(.brandCharcoal)
                    SecureField("Enter WiFi password", text: $password)
                        .textFieldStyle(.plain)
                        .padding(12)
                        .background(Color.gray.opacity(0.06))
                        .cornerRadius(10)
                }
            }

            Button(action: onConnect) {
                HStack(spacing: 8) {
                    if isLoading {
                        ProgressView().tint(.white).scaleEffect(0.8)
                        Text("Connecting...")
                    } else {
                        Text("Connect to Network")
                    }
                }
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 14)
                .background(isLoading ? Color.brandCharcoal.opacity(0.6) : Color.brandCharcoal)
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
