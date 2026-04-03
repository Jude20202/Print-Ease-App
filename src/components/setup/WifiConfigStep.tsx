import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import { wifiNetworks } from "@/lib/mock-data";

export default function WifiConfigStep({
  wifiNetwork,
  wifiPassword,
  isLoading,
  onNetworkChange,
  onPasswordChange,
  onConnect,
}: {
  wifiNetwork: string;
  wifiPassword: string;
  isLoading: boolean;
  onNetworkChange: (v: string) => void;
  onPasswordChange: (v: string) => void;
  onConnect: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-charcoal">
          Connect Print Ease to WiFi
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Choose the network you want your printer to use.
        </p>
      </div>

      <div className="w-full flex flex-col gap-4 text-left">
        <Select
          label="WiFi Network"
          options={wifiNetworks.map((n) => ({ value: n.ssid, label: n.ssid }))}
          value={wifiNetwork}
          onChange={(e) => onNetworkChange(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter WiFi password"
          value={wifiPassword}
          onChange={(e) => onPasswordChange(e.target.value)}
        />
      </div>

      <Button variant="dark" onClick={onConnect} fullWidth disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Connecting...
          </span>
        ) : (
          "Connect to Network"
        )}
      </Button>
    </div>
  );
}
