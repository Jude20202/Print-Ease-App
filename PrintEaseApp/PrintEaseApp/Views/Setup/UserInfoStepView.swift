import SwiftUI

struct UserInfoStepView: View {
    @Binding var name: String
    @Binding var email: String
    @Binding var company: String
    let onNext: () -> Void

    private var isValid: Bool {
        !name.trimmingCharacters(in: .whitespaces).isEmpty &&
        !email.trimmingCharacters(in: .whitespaces).isEmpty &&
        email.contains("@")
    }

    var body: some View {
        VStack(spacing: 24) {
            VStack(spacing: 8) {
                ZStack {
                    Circle()
                        .fill(Color.brandBlueLight)
                        .frame(width: 60, height: 60)
                    Image(systemName: "person.crop.circle.fill")
                        .font(.system(size: 28))
                        .foregroundColor(.brandBlue)
                }

                Text("Tell Us About You")
                    .font(.headingLarge)
                    .foregroundColor(.brandCharcoal)
                Text("We'll use this to personalize your experience.")
                    .font(.bodyRegular)
                    .foregroundColor(.gray)
                    .multilineTextAlignment(.center)
            }

            VStack(spacing: 16) {
                VStack(alignment: .leading, spacing: 6) {
                    Text("Full Name")
                        .font(.system(size: 13, weight: .medium))
                        .foregroundColor(.brandCharcoal)
                    TextField("Alex Johnson", text: $name)
                        .textFieldStyle(.plain)
                        .padding(12)
                        .background(Color.gray.opacity(0.06))
                        .cornerRadius(10)
                        .autocorrectionDisabled()
                }

                VStack(alignment: .leading, spacing: 6) {
                    Text("Email")
                        .font(.system(size: 13, weight: .medium))
                        .foregroundColor(.brandCharcoal)
                    TextField("you@example.com", text: $email)
                        .textFieldStyle(.plain)
                        .padding(12)
                        .background(Color.gray.opacity(0.06))
                        .cornerRadius(10)
                        .keyboardType(.emailAddress)
                        .textInputAutocapitalization(.never)
                        .autocorrectionDisabled()
                }

                VStack(alignment: .leading, spacing: 6) {
                    HStack {
                        Text("Company")
                            .font(.system(size: 13, weight: .medium))
                            .foregroundColor(.brandCharcoal)
                        Text("(optional)")
                            .font(.caption)
                            .foregroundColor(.gray)
                    }
                    TextField("Your organization", text: $company)
                        .textFieldStyle(.plain)
                        .padding(12)
                        .background(Color.gray.opacity(0.06))
                        .cornerRadius(10)
                        .autocorrectionDisabled()
                }
            }

            Button(action: onNext) {
                Text("Continue")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 14)
                    .background(isValid ? Color.brandBlue : Color.gray.opacity(0.3))
                    .cornerRadius(12)
            }
            .disabled(!isValid)
        }
        .padding(24)
        .background(Color.white)
        .cornerRadius(16)
        .shadow(color: .black.opacity(0.05), radius: 8, y: 4)
    }
}
