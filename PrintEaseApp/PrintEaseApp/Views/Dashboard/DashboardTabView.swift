import SwiftUI

struct DashboardTabView: View {
    @AppStorage("analyticsSubscribed") private var analyticsSubscribed = false

    var body: some View {
        TabView {
            HomeView()
                .tabItem {
                    Label("Home", systemImage: "square.grid.2x2.fill")
                }

            PrintersView()
                .tabItem {
                    Label("Printers", systemImage: "printer.fill")
                }

            SettingsView()
                .tabItem {
                    Label("Settings", systemImage: "gearshape.fill")
                }
        }
        .tint(.brandBlue)
    }
}
