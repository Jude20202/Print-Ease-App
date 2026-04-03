import SwiftUI
import Charts

struct UsageChartView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Usage Trend")
                .font(.headingSmall)
                .foregroundColor(.brandCharcoal)

            Chart(MockData.usageTrend) { point in
                BarMark(
                    x: .value("Date", point.date),
                    y: .value("Prints", point.prints)
                )
                .foregroundStyle(Color.brandBlue)
                .cornerRadius(4)
            }
            .frame(height: 200)
            .chartXAxis {
                AxisMarks(values: .automatic) { _ in
                    AxisValueLabel()
                        .font(.system(size: 9))
                        .foregroundStyle(.gray)
                }
            }
            .chartYAxis {
                AxisMarks(position: .leading) { _ in
                    AxisGridLine(stroke: StrokeStyle(lineWidth: 0.5, dash: [4]))
                        .foregroundStyle(.gray.opacity(0.3))
                    AxisValueLabel()
                        .font(.system(size: 10))
                        .foregroundStyle(.gray)
                }
            }
        }
        .padding(16)
        .background(Color.white)
        .cornerRadius(14)
        .shadow(color: .black.opacity(0.04), radius: 4, y: 2)
    }
}
