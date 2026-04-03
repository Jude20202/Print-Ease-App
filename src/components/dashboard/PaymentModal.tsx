"use client";

import { useState } from "react";
import { X, CheckCircle2, Lock } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { analyticsFeatures } from "@/lib/mock-data";

type Stage = "form" | "processing" | "success";

export default function PaymentModal({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [stage, setStage] = useState<Stage>("form");
  const [cardNumber, setCardNumber] = useState("4242 4242 4242 4242");
  const [expiry, setExpiry] = useState("12/28");
  const [cvc, setCvc] = useState("123");
  const [name, setName] = useState("Alex Johnson");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStage("processing");
    setTimeout(() => {
      setStage("success");
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={stage === "form" ? onClose : undefined} />
      <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {stage === "form" && (
          <>
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-bold text-brand-charcoal">
                Upgrade to Print Ease Analytics
              </h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="bg-brand-blue-light rounded-xl p-4 mb-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-sm font-semibold text-brand-blue">Analytics Pro</span>
                  <span className="text-2xl font-bold text-brand-charcoal">
                    $5<span className="text-sm font-normal text-gray-500">/mo per adapter</span>
                  </span>
                </div>
                <ul className="space-y-2">
                  {analyticsFeatures.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Secure payment - demo mode</span>
                </div>

                <Input
                  label="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                />
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    label="Expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM/YY"
                  />
                  <Input
                    label="CVC"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="123"
                  />
                </div>
                <Input
                  label="Name on Card"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                />

                <Button type="submit" variant="accent" fullWidth className="mt-2">
                  Subscribe - $5.00/mo
                </Button>
              </form>
            </div>
          </>
        )}

        {stage === "processing" && (
          <div className="p-12 flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-medium text-brand-charcoal">Processing payment...</p>
            <p className="text-xs text-gray-400">This is a demo - no real charge</p>
          </div>
        )}

        {stage === "success" && (
          <div className="p-12 flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-brand-charcoal">You&apos;re Subscribed!</h3>
            <p className="text-sm text-gray-500 text-center">
              Analytics is now active. Your dashboard is being unlocked...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
