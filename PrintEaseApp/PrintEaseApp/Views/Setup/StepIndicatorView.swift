import SwiftUI

struct StepIndicatorView: View {
    let currentStep: Int
    let totalSteps: Int = 6

    var body: some View {
        HStack(spacing: 6) {
            ForEach(1...totalSteps, id: \.self) { step in
                Circle()
                    .fill(step <= currentStep ? Color.brandBlue : Color.gray.opacity(0.3))
                    .frame(width: step == currentStep ? 10 : 8, height: step == currentStep ? 10 : 8)
                    .animation(.easeInOut(duration: 0.2), value: currentStep)
                if step < totalSteps {
                    Rectangle()
                        .fill(step < currentStep ? Color.brandBlue : Color.gray.opacity(0.3))
                        .frame(width: 20, height: 2)
                }
            }
        }
    }
}
