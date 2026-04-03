import Button from "@/components/ui/Button";
import ChecklistItem from "@/components/ui/ChecklistItem";

export default function WelcomeStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-charcoal">
          Welcome to Print Ease Setup
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Let&apos;s get your printer connected to WiFi in just a few steps.
        </p>
      </div>

      <div className="w-full flex flex-col gap-4 bg-gray-50 rounded-xl p-5">
        <ChecklistItem text="Plug Print Ease into printer" />
        <ChecklistItem text="Connect power to Print Ease" />
        <ChecklistItem text="Make sure your phone or laptop is nearby" />
      </div>

      <Button onClick={onNext} fullWidth>
        Start Setup
      </Button>
    </div>
  );
}
