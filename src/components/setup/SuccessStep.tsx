"use client";

import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import ChecklistItem from "@/components/ui/ChecklistItem";

export default function SuccessStep() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div className="w-16 h-16 bg-brand-blue-light rounded-full flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8 text-brand-blue" />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-brand-charcoal">
          Your Printer is Now Wireless 🎉
        </h1>
      </div>

      <div className="w-full flex flex-col gap-3">
        <ChecklistItem text="Print from any device on your network" color="text-green-600" />
        <ChecklistItem text="Monitor usage from your dashboard" color="text-green-600" />
        <ChecklistItem text="No driver reinstall required" color="text-green-600" />
      </div>

      <div className="w-full flex flex-col gap-3">
        <Button onClick={() => router.push("/dashboard")} fullWidth>
          Open Dashboard
        </Button>
        <Button
          variant="outline"
          fullWidth
          onClick={() => alert("Test page sent to printer!")}
        >
          Print Test Page
        </Button>
      </div>

      <p className="text-xs text-gray-400">Setup completed in 2 minutes</p>
    </div>
  );
}
