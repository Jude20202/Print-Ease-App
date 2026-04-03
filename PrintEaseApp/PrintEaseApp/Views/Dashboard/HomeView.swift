import SwiftUI

struct HomeView: View {
    @AppStorage("userName") private var userName = ""
    @AppStorage("analyticsSubscribed") private var analyticsSubscribed = false

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    // Header
                    VStack(alignment: .leading, spacing: 4) {
                        Text("Dashboard")
                            .font(.headingLarge)
                            .foregroundColor(.brandCharcoal)
                        Text("Welcome back, \(userName.components(separatedBy: " ").first ?? "User")")
                            .font(.bodyRegular)
                            .foregroundColor(.gray)
                    }

                    // KPI Cards grid
                    LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 12) {
                        ForEach(MockData.userKpis) { kpi in
                            KpiCardView(item: kpi)
                        }
                    }

                    // Analytics section
                    if analyticsSubscribed {
                        AnalyticsView()
                    } else {
                        AnalyticsGateView()
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
                ToolbarItem(placement: .navigationBarTrailing) {
                    Text("Last 30 days")
                        .font(.caption)
                        .foregroundColor(.gray)
                }
            }
        }
    }
}
