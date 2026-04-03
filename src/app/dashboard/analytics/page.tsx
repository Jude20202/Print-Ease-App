"use client";

import UsageTrendChart from "@/components/dashboard/UsageTrendChart";
import TopUsersTable from "@/components/dashboard/TopUsersTable";
import WhatsIncluded from "@/components/dashboard/WhatsIncluded";
import AnalyticsGate from "@/components/dashboard/AnalyticsGate";

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-charcoal">Analytics</h1>
        <p className="text-sm text-gray-500">Detailed print usage insights and cost analysis</p>
      </div>

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
  );
}
