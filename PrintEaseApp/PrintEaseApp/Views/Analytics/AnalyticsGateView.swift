import SwiftUI

struct AnalyticsGateView: View {
    @State private var showPayment = false
    @AppStorage("analyticsSubscribed") private var analyticsSubscribed = false

    var body: some View {
        ZStack {
            // Blurred preview behind
            VStack(spacing: 16) {
                UsageChartView()
                TopUsersView()
            }
            .blur(radius: 6)
            .opacity(0.5)
            .allowsHitTesting(false)

            // Overlay card
            VStack(spacing: 16) {
                ZStack {
                    Circle()
                        .fill(Color.brandOrangeLight)
                        .frame(width: 56, height: 56)
                    Image(systemName: "lock.fill")
                        .font(.system(size: 24))
                        .foregroundColor(.brandOrange)
                }

                Text("Unlock Analytics")
                    .font(.headingMedium)
                    .foregroundColor(.brandCharcoal)

                Text("Get detailed insights into your print usage, costs, and optimization opportunities.")
                    .font(.bodySmall)
                    .foregroundColor(.gray)
                    .multilineTextAlignment(.center)

                VStack(alignment: .leading, spacing: 8) {
                    ForEach(MockData.analyticsFeatures.prefix(3), id: \.self) { feature in
                        HStack(spacing: 8) {
                            Image(systemName: "chart.bar.fill")
                                .font(.system(size: 11))
                                .foregroundColor(.brandOrange)
                            Text(feature)
                                .font(.system(size: 12))
                                .foregroundColor(.gray)
                        }
                    }
                }

                Button {
                    showPayment = true
                } label: {
                    Text("Upgrade - $5/mo")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 13)
                        .background(Color.brandOrange)
                        .cornerRadius(12)
                }
            }
            .padding(24)
            .background(Color.white)
            .cornerRadius(18)
            .shadow(color: .black.opacity(0.12), radius: 16, y: 8)
            .padding(.horizontal, 24)
        }
        .sheet(isPresented: $showPayment) {
            PaymentSheetView()
        }
    }
}
