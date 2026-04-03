export default function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="flex items-center gap-2">
          <div
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              step === currentStep
                ? "bg-brand-blue scale-125"
                : step < currentStep
                ? "bg-brand-blue"
                : "bg-gray-300"
            }`}
          />
          {step < 5 && (
            <div
              className={`w-8 h-0.5 ${
                step < currentStep ? "bg-brand-blue" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
