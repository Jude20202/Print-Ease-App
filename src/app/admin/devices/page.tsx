"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { mockDevices, mockUsers } from "@/lib/mock-data";
import { Search } from "lucide-react";

export default function AdminDevicesPage() {
  const [search, setSearch] = useState("");

  const filtered = mockDevices.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.printerModel.toLowerCase().includes(search.toLowerCase())
  );

  const getUserName = (userId: string) =>
    mockUsers.find((u) => u.id === userId)?.name || "Unknown";

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-charcoal">Devices</h1>
          <p className="text-sm text-gray-500">{mockDevices.length} registered adapters</p>
        </div>
      </div>

      <Card>
        <div className="flex items-center gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search devices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Device ID</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Printer Model</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Assigned User</th>
                <th className="text-center py-2 px-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="text-center py-2 px-3 text-xs font-medium text-gray-500 uppercase">Signal</th>
                <th className="text-right py-2 px-3 text-xs font-medium text-gray-500 uppercase">Total Prints</th>
                <th className="text-right py-2 px-3 text-xs font-medium text-gray-500 uppercase">Total Pages</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Last Seen</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((device) => (
                <tr key={device.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-3 px-3 font-mono text-sm text-brand-charcoal">{device.name}</td>
                  <td className="py-3 px-3 text-brand-charcoal">{device.printerModel}</td>
                  <td className="py-3 px-3 text-gray-500">{getUserName(device.userId)}</td>
                  <td className="py-3 px-3 text-center">
                    <Badge variant={device.status as "online" | "offline" | "setup"}>
                      {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className={`text-xs font-medium ${
                      device.signal === "Strong" ? "text-green-600" :
                      device.signal === "Medium" ? "text-yellow-600" : "text-red-500"
                    }`}>
                      {device.signal}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right text-brand-charcoal">{device.totalPrints}</td>
                  <td className="py-3 px-3 text-right text-brand-charcoal">{device.totalPages.toLocaleString()}</td>
                  <td className="py-3 px-3 text-gray-500 text-xs">
                    {new Date(device.lastSeen).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
