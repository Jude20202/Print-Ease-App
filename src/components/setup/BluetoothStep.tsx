import { Bluetooth } from "lucide-react";
import Button from "@/components/ui/Button";

export default function BluetoothStep({
  isLoading,
  onStartDiscovery,
}: {
  isLoading: boolean;
  onStartDiscovery: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div className="w-16 h-16 bg-brand-blue-light rounded-full flex items-center justify-center">
        <Bluetooth className="w-8 h-8 text-brand-blue" />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-brand-charcoal">Enable Bluetooth</h1>
        <p className="text-sm text-gray-500 mt-2">
          Make sure Bluetooth is enabled on your device to discover nearby PrintEase adapters.
        </p>
      </div>

      <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          Ensure your device&apos;s Bluetooth is turned on before proceeding
        </p>
      </div>

      <Button onClick={onStartDiscovery} fullWidth disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Searching...
          </span>
        ) : (
          "Start Discovery"
        )}
      </Button>
    </div>
  );
}
