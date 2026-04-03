"use client";

import { useState } from "react";
import { BarChart3, Lock } from "lucide-react";
import Button from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import PaymentModal from "./PaymentModal";
import { analyticsFeatures } from "@/lib/mock-data";

export default function AnalyticsGate({ children }: { children: React.ReactNode }) {
  const { user, updateUser } = useAuth();
  const [showPayment, setShowPayment] = useState(false);

  if (user?.analyticsSubscribed) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="relative">
        {/* Blurred preview */}
        <div className="filter blur-sm opacity-50 pointer-events-none select-none">
          {children}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm text-center">
            <div className="w-14 h-14 bg-brand-orange-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7 text-brand-orange" />
            </div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">
              Unlock Analytics
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Get detailed insights into your print usage, costs, and optimization opportunities.
            </p>
            <ul className="text-left space-y-2 mb-6">
              {analyticsFeatures.slice(0, 3).map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                  <BarChart3 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="accent" fullWidth onClick={() => setShowPayment(true)}>
              Upgrade - $5/mo
            </Button>
          </div>
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
            setShowPayment(false);
            updateUser({ analyticsSubscribed: true });
          }}
        />
      )}
    </>
  );
}
