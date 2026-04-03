import SwiftUI

struct SetupContainerView: View {
    @Binding var setupComplete: Bool
    @AppStorage("userName") private var userName = ""
    @AppStorage("userEmail") private var userEmail = ""
    @AppStorage("userCompany") private var userCompany = ""

    @State private var currentStep = 1
    @State private var isLoading = false
    @State private var selectedNetwork = "OfficeNetwork"
    @State private var wifiPassword = ""

    var body: some View {
        VStack(spacing: 0) {
            // Header
            LogoView(size: 24)
                .padding(.top, 16)
                .padding(.bottom, 12)

            StepIndicatorView(currentStep: currentStep)
                .padding(.bottom, 20)

            // Step content
            ScrollView {
                VStack {
                    switch currentStep {
                    case 1:
                        WelcomeStepView { withAnimation { currentStep = 2 } }
                    case 2:
                        UserInfoStepView(
                            name: $userName,
                            email: $userEmail,
                            company: $userCompany,
                            onNext: { withAnimation { currentStep = 3 } }
                        )
                    case 3:
                        BluetoothStepView(isLoading: $isLoading) {
                            isLoading = true
                            Task {
                                try? await Task.sleep(nanoseconds: 2_000_000_000)
                                await MainActor.run {
                                    isLoading = false
                                    withAnimation { currentStep = 4 }
                                }
                            }
                        }
                    case 4:
                        DeviceDetectedView(isLoading: $isLoading) {
                            isLoading = true
                            Task {
                                try? await Task.sleep(nanoseconds: 1_500_000_000)
                                await MainActor.run {
                                    isLoading = false
                                    withAnimation { currentStep = 5 }
                                }
                            }
                        }
                    case 5:
                        WifiConfigView(
                            selectedNetwork: $selectedNetwork,
                            password: $wifiPassword,
                            isLoading: $isLoading
                        ) {
                            isLoading = true
                            Task {
                                try? await Task.sleep(nanoseconds: 2_000_000_000)
                                await MainActor.run {
                                    isLoading = false
                                    withAnimation { currentStep = 6 }
                                }
                            }
                        }
                    case 6:
                        SuccessStepView { setupComplete = true }
                    default:
                        EmptyView()
                    }
                }
                .padding(.horizontal, 24)
                .padding(.bottom, 40)
            }
        }
        .background(Color.brandOffWhite)
    }
}
