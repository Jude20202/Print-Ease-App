"use client";

import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Logo from "@/components/Logo";
import {
  LayoutDashboard,
  Printer,
  BarChart3,
  Settings,
  LogOut,
  Lock,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Printers", href: "/dashboard/printers", icon: Printer },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3, gated: true },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-brand-charcoal text-white flex flex-col min-h-screen">
      <div className="p-6">
        <Logo size="text-xl" onDark />
      </div>

      <nav className="flex-1 px-3">
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          const locked = item.gated && !user?.analyticsSubscribed;
          return (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium mb-1 transition-colors cursor-pointer
                ${active ? "bg-white/15 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
              {locked && <Lock className="w-3.5 h-3.5 ml-auto text-gray-500" />}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-xs font-bold">
            {user?.name?.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user?.name}</p>
            <p className="text-xs text-gray-400 truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
