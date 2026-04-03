"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "@/components/ui/Card";
import { userGrowthData } from "@/lib/mock-data";

export default function UserGrowthChart() {
  return (
    <Card>
      <h3 className="text-sm font-semibold text-brand-charcoal mb-4">User Growth</h3>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={userGrowthData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#888" }} />
          <YAxis tick={{ fontSize: 12, fill: "#888" }} />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              fontSize: "13px",
            }}
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#2B4AE5"
            strokeWidth={2.5}
            dot={{ fill: "#2B4AE5", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
