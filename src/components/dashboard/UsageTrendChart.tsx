"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "@/components/ui/Card";
import { usageTrendData } from "@/lib/mock-data";

export default function UsageTrendChart() {
  return (
    <Card>
      <h3 className="text-sm font-semibold text-brand-charcoal mb-4">Usage Trend</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={usageTrendData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#888" }} />
          <YAxis tick={{ fontSize: 12, fill: "#888" }} />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              fontSize: "13px",
            }}
          />
          <Bar dataKey="prints" fill="#2B4AE5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
