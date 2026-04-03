import Foundation

struct PrintEaseDevice: Identifiable {
    let id: String
    let name: String
    let printerModel: String
    var status: DeviceStatus
    let signal: SignalStrength
    let totalPrints: Int
    let totalPages: Int
    let lastSeen: Date
}

enum DeviceStatus: String {
    case online = "Online"
    case offline = "Offline"
    case setup = "Setup"
}

enum SignalStrength: String {
    case strong = "Strong"
    case medium = "Medium"
    case weak = "Weak"
}

struct WifiNetwork: Identifiable {
    let id = UUID()
    let ssid: String
    let signal: SignalStrength
    let secured: Bool
}

struct KpiItem: Identifiable {
    let id = UUID()
    let label: String
    let value: String
    let icon: String
    let change: String
    let isPositive: Bool
}

struct UsageTrendPoint: Identifiable {
    let id = UUID()
    let date: String
    let prints: Int
}

struct TopUserItem: Identifiable {
    let id = UUID()
    let name: String
    let team: String
    let jobs: Int
    let pages: Int
    let cost: String
    let status: UserStatus
}

enum UserStatus: String {
    case active = "Active"
    case warning = "Warning"
    case inactive = "Inactive"
}
