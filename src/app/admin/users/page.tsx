"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Search } from "lucide-react";

export default function AdminUsersPage() {
  const { allUsers, setAllUsers } = useAuth();
  const [search, setSearch] = useState("");

  const filtered = allUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSubscription = (userId: string) => {
    setAllUsers(
      allUsers.map((u) =>
        u.id === userId ? { ...u, analyticsSubscribed: !u.analyticsSubscribed } : u
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-brand-charcoal">Users</h1>
          <p className="text-sm text-gray-500">{allUsers.length} total users</p>
        </div>
      </div>

      <Card>
        <div className="flex items-center gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
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
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="text-center py-2 px-3 text-xs font-medium text-gray-500 uppercase">Devices</th>
                <th className="text-center py-2 px-3 text-xs font-medium text-gray-500 uppercase">Subscription</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Last Active</th>
                <th className="text-center py-2 px-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-brand-blue rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium text-brand-charcoal">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-gray-500">{user.email}</td>
                  <td className="py-3 px-3 text-center text-brand-charcoal">{user.devices.length}</td>
                  <td className="py-3 px-3 text-center">
                    <Badge variant={user.analyticsSubscribed ? "active" : "inactive"}>
                      {user.analyticsSubscribed ? "Subscribed" : "Free"}
                    </Badge>
                  </td>
                  <td className="py-3 px-3 text-gray-500">{user.lastActive}</td>
                  <td className="py-3 px-3 text-center">
                    <Button
                      variant={user.analyticsSubscribed ? "outline" : "accent"}
                      className="!px-3 !py-1.5 !text-xs"
                      onClick={() => toggleSubscription(user.id)}
                    >
                      {user.analyticsSubscribed ? "Revoke" : "Grant"} Analytics
                    </Button>
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
