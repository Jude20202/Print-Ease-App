import SwiftUI

struct LogoView: View {
    var size: CGFloat = 28
    var onDark: Bool = false

    var body: some View {
        HStack(spacing: 0) {
            Text("print")
                .font(.system(size: size, weight: .bold))
                .foregroundColor(onDark ? .white : .brandCharcoal)
            Text("ease")
                .font(.system(size: size, weight: .bold))
                .foregroundColor(.brandOrange)
        }
    }
}
