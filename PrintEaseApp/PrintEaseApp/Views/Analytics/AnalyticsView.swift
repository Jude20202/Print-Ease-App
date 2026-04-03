import SwiftUI

struct AnalyticsView: View {
    var body: some View {
        VStack(spacing: 16) {
            UsageChartView()
            TopUsersView()
        }
    }
}
