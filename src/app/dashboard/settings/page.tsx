"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { User, Bell, Shield, CreditCard } from "lucide-react";

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-charcoal">Settings</h1>
        <p className="text-sm text-gray-500">Manage your account preferences</p>
      </div>

      <div className="space-y-6">
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <User className="w-5 h-5 text-brand-blue" />
            <h3 className="text-sm font-semibold text-brand-charcoal">Profile</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Name</span>
              <span className="text-brand-charcoal font-medium">{user?.name}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Email</span>
              <span className="text-brand-charcoal font-medium">{user?.email}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Role</span>
              <span className="text-brand-charcoal font-medium capitalize">{user?.role}</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-5 h-5 text-brand-orange" />
            <h3 className="text-sm font-semibold text-brand-charcoal">Subscription</h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-brand-charcoal font-medium">
                {user?.analyticsSubscribed ? "Analytics Pro" : "Free Plan"}
              </p>
              <p className="text-xs text-gray-400">
                {user?.analyticsSubscribed ? "$5/month per adapter" : "Basic setup and printing only"}
              </p>
            </div>
            <Button variant={user?.analyticsSubscribed ? "outline" : "accent"} className="!text-xs !px-4 !py-2">
              {user?.analyticsSubscribed ? "Manage" : "Upgrade"}
            </Button>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-brand-blue" />
            <h3 className="text-sm font-semibold text-brand-charcoal">Notifications</h3>
          </div>
          <p className="text-xs text-gray-400">Notification preferences coming soon.</p>
        </Card>
      </div>
    </div>
  );
}
