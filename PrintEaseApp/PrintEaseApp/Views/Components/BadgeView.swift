import SwiftUI

struct BadgeView: View {
    let text: String
    let variant: BadgeVariant

    enum BadgeVariant {
        case active, warning, inactive, online, offline

        var bg: Color {
            switch self {
            case .active, .online: return Color.green.opacity(0.15)
            case .warning: return Color.yellow.opacity(0.15)
            case .inactive: return Color.gray.opacity(0.12)
            case .offline: return Color.red.opacity(0.12)
            }
        }
        var fg: Color {
            switch self {
            case .active, .online: return .green
            case .warning: return .orange
            case .inactive: return .gray
            case .offline: return .red
            }
        }
    }

    var body: some View {
        Text(text)
            .font(.system(size: 11, weight: .medium))
            .foregroundColor(variant.fg)
            .padding(.horizontal, 8)
            .padding(.vertical, 3)
            .background(variant.bg)
            .clipShape(Capsule())
    }
}
