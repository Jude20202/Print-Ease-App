"use client";

import { useState, useCallback } from "react";

export function useSetupWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [wifiNetwork, setWifiNetwork] = useState("OfficeNetwork");
  const [wifiPassword, setWifiPassword] = useState("");

  const nextStep = useCallback(() => {
    setCurrentStep((s) => Math.min(s + 1, 5));
  }, []);

  const startDiscovery = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(3);
    }, 2000);
  }, []);

  const connectToDevice = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(4);
    }, 1500);
  }, []);

  const connectToWifi = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(5);
    }, 2000);
  }, []);

  return {
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
  };
}
