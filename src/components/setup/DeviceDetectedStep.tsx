import { Wifi } from "lucide-react";
import Button from "@/components/ui/Button";
import { detectedDevice } from "@/lib/mock-data";

export default function DeviceDetectedStep({
  isLoading,
  onConnect,
}: {
  isLoading: boolean;
  onConnect: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-charcoal">
          Print Ease Device Detected
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          We found a new Print Ease adapter nearby.
        </p>
      </div>

      <div className="w-full border border-gray-200 rounded-xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-brand-blue-light rounded-full flex items-center justify-center">
            <Wifi className="w-5 h-5 text-brand-blue" />
          </div>
          <span className="font-semibold text-brand-charcoal">{detectedDevice.name}</span>
        </div>
        <div className="flex gap-8 text-sm">
          <div>
            <span className="text-gray-500">Signal</span>
            <p className="font-medium text-brand-charcoal">{detectedDevice.signal}</p>
          </div>
          <div>
            <span className="text-gray-500">Status</span>
            <p className="font-medium text-brand-charcoal">{detectedDevice.status}</p>
          </div>
        </div>
      </div>

      <Button onClick={onConnect} fullWidth disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Connecting...
          </span>
        ) : (
          "Connect"
        )}
      </Button>

      <button className="text-sm text-brand-blue hover:underline">
        Can&apos;t find your device?
      </button>
    </div>
  );
}
