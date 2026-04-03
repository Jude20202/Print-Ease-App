"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { useAuth } from "@/contexts/AuthContext";
import { subscriptionData } from "@/lib/mock-data";
import { DollarSign, Users, TrendingDown, CreditCard } from "lucide-react";

export default function AdminSubscriptionsPage() {
  const { allUsers } = useAuth();
  const paidUsers = allUsers.filter((u) => u.analyticsSubscribed);
  const freeUsers = allUsers.filter((u) => !u.analyticsSubscribed);
  const revenue = `$${paidUsers.length * 5}.00`;

  const stats = [
    { label: "Monthly Revenue", value: revenue, icon: DollarSign, color: "bg-green-100 text-green-600" },
    { label: "Active Subscribers", value: String(paidUsers.length), icon: CreditCard, color: "bg-blue-100 text-blue-600" },
    { label: "Free Tier Users", value: String(freeUsers.length), icon: Users, color: "bg-gray-100 text-gray-600" },
    { label: "Churn Rate", value: subscriptionData.churnRate, icon: TrendingDown, color: "bg-orange-100 text-brand-orange" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-charcoal">Subscriptions</h1>
        <p className="text-sm text-gray-500">Analytics subscription management</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-brand-charcoal">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-sm font-semibold text-brand-charcoal mb-4">Subscribed Users</h3>
          {paidUsers.length === 0 ? (
            <p className="text-sm text-gray-400">No subscribers yet</p>
          ) : (
            <div className="space-y-3">
              {paidUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand-charcoal">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <Badge variant="active">$5/mo</Badge>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card>
          <h3 className="text-sm font-semibold text-brand-charcoal mb-4">Free Tier Users</h3>
          {freeUsers.length === 0 ? (
            <p className="text-sm text-gray-400">All users are subscribed</p>
          ) : (
            <div className="space-y-3">
              {freeUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand-charcoal">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <Badge variant="inactive">Free</Badge>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
