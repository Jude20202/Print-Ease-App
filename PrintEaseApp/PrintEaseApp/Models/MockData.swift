import Foundation

struct MockData {
    static let detectedDevice = PrintEaseDevice(
        id: "4F2A",
        name: "PrintEase-4F2A",
        printerModel: "HP LaserJet P3015",
        status: .online,
        signal: .strong,
        totalPrints: 142,
        totalPages: 1276,
        lastSeen: Date()
    )

    static let userDevices: [PrintEaseDevice] = [
        detectedDevice
    ]

    static let wifiNetworks: [WifiNetwork] = [
        WifiNetwork(ssid: "OfficeNetwork", signal: .strong, secured: true),
        WifiNetwork(ssid: "HomeWiFi-5G", signal: .strong, secured: true),
        WifiNetwork(ssid: "GuestNetwork", signal: .medium, secured: false),
        WifiNetwork(ssid: "PrintRoom-WiFi", signal: .weak, secured: true),
    ]

    static let userKpis: [KpiItem] = [
        KpiItem(label: "Total Prints", value: "142", icon: "printer.fill", change: "+12%", isPositive: true),
        KpiItem(label: "Total Pages", value: "1,276", icon: "doc.text.fill", change: "+8%", isPositive: true),
        KpiItem(label: "Active Devices", value: "1", icon: "wifi", change: "0%", isPositive: true),
        KpiItem(label: "Est. Cost", value: "$63.00", icon: "dollarsign.circle.fill", change: "-5%", isPositive: false),
    ]

    static let usageTrend: [UsageTrendPoint] = [
        UsageTrendPoint(date: "Mar 1", prints: 18),
        UsageTrendPoint(date: "Mar 5", prints: 24),
        UsageTrendPoint(date: "Mar 9", prints: 15),
        UsageTrendPoint(date: "Mar 13", prints: 31),
        UsageTrendPoint(date: "Mar 17", prints: 22),
        UsageTrendPoint(date: "Mar 21", prints: 28),
        UsageTrendPoint(date: "Mar 25", prints: 35),
        UsageTrendPoint(date: "Mar 29", prints: 19),
        UsageTrendPoint(date: "Apr 1", prints: 12),
    ]

    static let topUsers: [TopUserItem] = [
        TopUserItem(name: "Accounting", team: "Finance", jobs: 58, pages: 412, cost: "$21.00", status: .active),
        TopUserItem(name: "Front Office", team: "Admin", jobs: 45, pages: 380, cost: "$17.50", status: .active),
        TopUserItem(name: "HR", team: "Human Resources", jobs: 30, pages: 276, cost: "$13.80", status: .warning),
        TopUserItem(name: "Operations", team: "Ops", jobs: 24, pages: 195, cost: "$11.90", status: .active),
        TopUserItem(name: "Marketing", team: "Marketing", jobs: 12, pages: 89, cost: "$5.20", status: .inactive),
    ]

    static let analyticsFeatures: [String] = [
        "Real-time ink usage monitoring",
        "Estimated replacement timing",
        "High-cost print behavior detection",
        "Usage reports for cost allocation",
        "Team & employee breakdowns",
        "Monthly cost trend analysis",
    ]
}
