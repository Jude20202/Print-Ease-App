export interface User {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin";
  avatar?: string;
  analyticsSubscribed: boolean;
  createdAt: string;
  lastActive: string;
  devices: string[];
}

export interface Device {
  id: string;
  name: string;
  userId: string;
  printerModel: string;
  status: "online" | "offline" | "setup";
  signal: "Strong" | "Medium" | "Weak";
  lastSeen: string;
  totalPrints: number;
  totalPages: number;
}

export interface KpiData {
  label: string;
  value: string;
  icon: string;
  change?: string;
  changeType?: "up" | "down";
}

export interface UsageTrendPoint {
  date: string;
  prints: number;
}

export interface TopUser {
  id: string;
  name: string;
  team: string;
  jobs: number;
  pages: number;
  cost: string;
  status: "active" | "warning" | "inactive";
}

export interface WifiNetwork {
  ssid: string;
  signal: "Strong" | "Medium" | "Weak";
  secured: boolean;
}

export interface PrintEaseDevice {
  id: string;
  name: string;
  signal: string;
  status: string;
}

export interface AdminKpi {
  label: string;
  value: string;
  icon: string;
  change?: string;
  changeType?: "up" | "down";
}

export interface UserGrowthPoint {
  month: string;
  users: number;
}

export interface ActivityItem {
  id: string;
  type: "signup" | "setup" | "subscription" | "print";
  message: string;
  timestamp: string;
}

export interface SubscriptionData {
  totalSubscribers: number;
  monthlyRevenue: string;
  churnRate: string;
  freeUsers: number;
  paidUsers: number;
}
