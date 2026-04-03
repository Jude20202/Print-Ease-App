"use client";

import { useAuth } from "@/contexts/AuthContext";
import KpiCards from "@/components/dashboard/KpiCards";
import UsageTrendChart from "@/components/dashboard/UsageTrendChart";
import TopUsersTable from "@/components/dashboard/TopUsersTable";
import WhatsIncluded from "@/components/dashboard/WhatsIncluded";
import AnalyticsGate from "@/components/dashboard/AnalyticsGate";
import { userKpis } from "@/lib/mock-data";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-charcoal">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Welcome back, {user?.name?.split(" ")[0]}
          </p>
        </div>
        <div className="text-sm text-gray-400">Last 30 days</div>
      </div>

      <KpiCards data={userKpis} />

      <div className="mt-6">
        <AnalyticsGate>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <UsageTrendChart />
            </div>
            <WhatsIncluded />
          </div>
          <div className="mt-6">
            <TopUsersTable />
          </div>
        </AnalyticsGate>
      </div>
    </div>
  );
}
