"use client";

import KpiCards from "@/components/dashboard/KpiCards";
import UserGrowthChart from "@/components/admin/UserGrowthChart";
import RecentActivity from "@/components/admin/RecentActivity";
import { adminKpis } from "@/lib/mock-data";
import { Users, HardDrive, CreditCard, DollarSign } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  "hard-drive": HardDrive,
  "credit-card": CreditCard,
  "dollar-sign": DollarSign,
};

export default function AdminOverviewPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-charcoal">Admin Overview</h1>
        <p className="text-sm text-gray-500">Platform-wide metrics and activity</p>
      </div>

      <KpiCards data={adminKpis} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <UserGrowthChart />
        </div>
        <RecentActivity />
      </div>
    </div>
  );
}
