"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { mockDevices } from "@/lib/mock-data";
import { useAuth } from "@/contexts/AuthContext";
import { Wifi } from "lucide-react";

export default function PrintersPage() {
  const { user } = useAuth();
  const userDevices = mockDevices.filter((d) => user?.devices.includes(d.id));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-charcoal">My Printers</h1>
        <p className="text-sm text-gray-500">Manage your connected Print Ease adapters</p>
      </div>

      {userDevices.length === 0 ? (
        <Card>
          <div className="text-center py-8">
            <Wifi className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-500">No printers connected yet.</p>
            <p className="text-xs text-gray-400 mt-1">Complete the setup wizard to connect your first printer.</p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userDevices.map((device) => (
            <Card key={device.id}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-charcoal">{device.name}</p>
                    <p className="text-xs text-gray-400">{device.printerModel}</p>
                  </div>
                </div>
                <Badge variant={device.status as "online" | "offline"}>
                  {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center border-t pt-4">
                <div>
                  <p className="text-lg font-bold text-brand-charcoal">{device.totalPrints}</p>
                  <p className="text-xs text-gray-400">Prints</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-brand-charcoal">{device.totalPages.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">Pages</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-brand-charcoal">{device.signal}</p>
                  <p className="text-xs text-gray-400">Signal</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
