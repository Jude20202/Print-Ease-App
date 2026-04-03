"use client";

import { useSetupWizard } from "@/hooks/useSetupWizard";
import Card from "@/components/ui/Card";
import StepIndicator from "./StepIndicator";
import WelcomeStep from "./WelcomeStep";
import BluetoothStep from "./BluetoothStep";
import DeviceDetectedStep from "./DeviceDetectedStep";
import WifiConfigStep from "./WifiConfigStep";
import SuccessStep from "./SuccessStep";

export default function SetupWizard() {
  const {
    currentStep,
    isLoading,
    wifiNetwork,
    wifiPassword,
    setWifiNetwork,
    setWifiPassword,
    nextStep,
    startDiscovery,
    connectToDevice,
    connectToWifi,
  } = useSetupWizard();

  return (
    <div className="w-full max-w-lg mx-auto">
      <StepIndicator currentStep={currentStep} />
      <Card>
        {currentStep === 1 && <WelcomeStep onNext={nextStep} />}
        {currentStep === 2 && (
          <BluetoothStep isLoading={isLoading} onStartDiscovery={startDiscovery} />
        )}
        {currentStep === 3 && (
          <DeviceDetectedStep isLoading={isLoading} onConnect={connectToDevice} />
        )}
        {currentStep === 4 && (
          <WifiConfigStep
            wifiNetwork={wifiNetwork}
            wifiPassword={wifiPassword}
            isLoading={isLoading}
            onNetworkChange={setWifiNetwork}
            onPasswordChange={setWifiPassword}
            onConnect={connectToWifi}
          />
        )}
        {currentStep === 5 && <SuccessStep />}
      </Card>
    </div>
  );
}
