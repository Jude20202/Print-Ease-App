import SwiftUI

struct PaymentSheetView: View {
    @Environment(\.dismiss) private var dismiss
    @AppStorage("analyticsSubscribed") private var analyticsSubscribed = false

    @State private var cardNumber = "4242 4242 4242 4242"
    @State private var expiry = "12/28"
    @State private var cvc = "123"
    @State private var nameOnCard = ""
    @State private var stage: Stage = .form

    @AppStorage("userName") private var userName = ""

    enum Stage { case form, processing, success }

    var body: some View {
        NavigationStack {
            Group {
                switch stage {
                case .form:
                    formView
                case .processing:
                    processingView
                case .success:
                    successView
                }
            }
            .navigationTitle(stage == .form ? "Upgrade to Analytics" : "")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                if stage == .form {
                    ToolbarItem(placement: .cancellationAction) {
                        Button("Cancel") { dismiss() }
                    }
                }
            }
        }
        .onAppear {
            nameOnCard = userName
        }
        .interactiveDismissDisabled(stage != .form)
    }

    private var formView: some View {
        ScrollView {
            VStack(spacing: 20) {
                // Plan summary
                VStack(alignment: .leading, spacing: 10) {
                    HStack {
                        Text("Analytics Pro")
                            .font(.system(size: 14, weight: .semibold))
                            .foregroundColor(.brandBlue)
                        Spacer()
                        HStack(alignment: .firstTextBaseline, spacing: 2) {
                            Text("$5")
                                .font(.system(size: 24, weight: .bold))
                                .foregroundColor(.brandCharcoal)
                            Text("/mo per adapter")
                                .font(.caption)
                                .foregroundColor(.gray)
                        }
                    }

                    ForEach(MockData.analyticsFeatures.prefix(4), id: \.self) { feature in
                        HStack(spacing: 6) {
                            Image(systemName: "checkmark.circle.fill")
                                .font(.system(size: 12))
                                .foregroundColor(.brandBlue)
                            Text(feature)
                                .font(.system(size: 12))
                                .foregroundColor(.gray)
                        }
                    }
                }
                .padding(16)
                .background(Color.brandBlueLight)
                .cornerRadius(12)

                // Card form
                VStack(alignment: .leading, spacing: 14) {
                    HStack(spacing: 6) {
                        Image(systemName: "lock.fill")
                            .font(.system(size: 11))
                            .foregroundColor(.gray)
                        Text("Secure payment - demo mode")
                            .font(.caption)
                            .foregroundColor(.gray)
                    }

                    field(label: "Card Number", text: $cardNumber)
                    HStack(spacing: 12) {
                        field(label: "Expiry", text: $expiry)
                        field(label: "CVC", text: $cvc)
                    }
                    field(label: "Name on Card", text: $nameOnCard)
                }

                Button {
                    withAnimation { stage = .processing }
                    Task {
                        try? await Task.sleep(nanoseconds: 1_500_000_000)
                        await MainActor.run {
                            withAnimation { stage = .success }
                        }
                        try? await Task.sleep(nanoseconds: 2_000_000_000)
                        await MainActor.run {
                            analyticsSubscribed = true
                            dismiss()
                        }
                    }
                } label: {
                    Text("Subscribe - $5.00/mo")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 14)
                        .background(Color.brandOrange)
                        .cornerRadius(12)
                }
            }
            .padding(20)
        }
    }

    private var processingView: some View {
        VStack(spacing: 16) {
            ProgressView()
                .scaleEffect(1.5)
                .tint(.brandOrange)
            Text("Processing payment...")
                .font(.system(size: 15, weight: .medium))
                .foregroundColor(.brandCharcoal)
            Text("This is a demo - no real charge")
                .font(.caption)
                .foregroundColor(.gray)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    private var successView: some View {
        VStack(spacing: 16) {
            ZStack {
                Circle()
                    .fill(Color.green.opacity(0.15))
                    .frame(width: 64, height: 64)
                Image(systemName: "checkmark.circle.fill")
                    .font(.system(size: 32))
                    .foregroundColor(.green)
            }
            Text("You're Subscribed!")
                .font(.headingMedium)
                .foregroundColor(.brandCharcoal)
            Text("Analytics is now active.\nYour dashboard is being unlocked...")
                .font(.bodyRegular)
                .foregroundColor(.gray)
                .multilineTextAlignment(.center)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    private func field(label: String, text: Binding<String>) -> some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(label)
                .font(.system(size: 12, weight: .medium))
                .foregroundColor(.brandCharcoal)
            TextField("", text: text)
                .textFieldStyle(.plain)
                .padding(11)
                .background(Color.gray.opacity(0.06))
                .cornerRadius(8)
                .font(.system(size: 14))
        }
    }
}
