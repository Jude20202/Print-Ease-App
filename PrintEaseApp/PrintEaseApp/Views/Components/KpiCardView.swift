import SwiftUI

struct KpiCardView: View {
    let item: KpiItem

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                ZStack {
                    RoundedRectangle(cornerRadius: 8)
                        .fill(Color.brandBlueLight)
                        .frame(width: 36, height: 36)
                    Image(systemName: item.icon)
                        .font(.system(size: 16))
                        .foregroundColor(.brandBlue)
                }
                Spacer()
                HStack(spacing: 2) {
                    Image(systemName: item.isPositive ? "arrow.up.right" : "arrow.down.right")
                        .font(.system(size: 10))
                    Text(item.change)
                        .font(.system(size: 11, weight: .medium))
                }
                .foregroundColor(item.isPositive ? .green : .red)
            }
            VStack(alignment: .leading, spacing: 2) {
                Text(item.value)
                    .font(.system(size: 22, weight: .bold))
                    .foregroundColor(.brandCharcoal)
                Text(item.label)
                    .font(.caption)
                    .foregroundColor(.gray)
            }
        }
        .padding(14)
        .background(Color.white)
        .cornerRadius(14)
        .shadow(color: .black.opacity(0.04), radius: 4, y: 2)
    }
}
