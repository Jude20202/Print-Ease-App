import SwiftUI

@main
struct PrintEaseApp: App {
    @AppStorage("setupComplete") private var setupComplete = false

    var body: some Scene {
        WindowGroup {
            if setupComplete {
                DashboardTabView()
            } else {
                SetupContainerView(setupComplete: $setupComplete)
            }
        }
    }
}
