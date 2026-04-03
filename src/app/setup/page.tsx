"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Logo from "@/components/Logo";
import SetupWizard from "@/components/setup/SetupWizard";

export default function SetupPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-brand-offwhite flex flex-col">
      <header className="flex items-center justify-center py-6">
        <Logo size="text-2xl" />
      </header>
      <main className="flex-1 flex items-center justify-center px-4 pb-12">
        <SetupWizard />
      </main>
    </div>
  );
}
