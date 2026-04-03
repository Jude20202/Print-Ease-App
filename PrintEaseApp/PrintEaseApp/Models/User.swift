import Foundation

struct AppUser: Codable, Identifiable {
    var id: String = UUID().uuidString
    var name: String
    var email: String
    var company: String
    var analyticsSubscribed: Bool = false
    var createdAt: Date = Date()
}
