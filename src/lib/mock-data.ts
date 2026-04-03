import {
  User,
  Device,
  KpiData,
  UsageTrendPoint,
  TopUser,
  WifiNetwork,
  PrintEaseDevice,
  AdminKpi,
  UserGrowthPoint,
  ActivityItem,
  SubscriptionData,
} from "./types";

// ── Auth / Users ──────────────────────────────────────────────
export const mockUsers: User[] = [
  {
    id: "u1",
    email: "user@printease.com",
    name: "Alex Johnson",
    role: "user",
    analyticsSubscribed: false,
    createdAt: "2026-01-15",
    lastActive: "2026-03-31",
    devices: ["d1"],
  },
  {
    id: "u2",
    email: "admin@printease.com",
    name: "Jude Crowson",
    role: "admin",
    analyticsSubscribed: true,
    createdAt: "2025-11-01",
    lastActive: "2026-04-01",
    devices: ["d2", "d3"],
  },
  {
    id: "u3",
    email: "sarah@company.com",
    name: "Sarah Mitchell",
    role: "user",
    analyticsSubscribed: true,
    createdAt: "2026-02-10",
    lastActive: "2026-03-30",
    devices: ["d4"],
  },
  {
    id: "u4",
    email: "front@company.com",
    name: "Front Office",
    role: "user",
    analyticsSubscribed: false,
    createdAt: "2026-02-20",
    lastActive: "2026-03-28",
    devices: ["d5", "d6"],
  },
  {
    id: "u5",
    email: "hr@company.com",
    name: "HR Department",
    role: "user",
    analyticsSubscribed: true,
    createdAt: "2026-03-01",
    lastActive: "2026-03-31",
    devices: ["d7"],
  },
  {
    id: "u6",
    email: "ops@company.com",
    name: "Operations",
    role: "user",
    analyticsSubscribed: false,
    createdAt: "2026-03-10",
    lastActive: "2026-03-29",
    devices: ["d8"],
  },
  {
    id: "u7",
    email: "mark@startup.io",
    name: "Mark Rivera",
    role: "user",
    analyticsSubscribed: true,
    createdAt: "2026-03-05",
    lastActive: "2026-04-01",
    devices: ["d9"],
  },
  {
    id: "u8",
    email: "lisa@design.co",
    name: "Lisa Chen",
    role: "user",
    analyticsSubscribed: false,
    createdAt: "2026-03-15",
    lastActive: "2026-03-27",
    devices: [],
  },
];

// ── Devices ───────────────────────────────────────────────────
export const mockDevices: Device[] = [
  { id: "d1", name: "PrintEase-4F2A", userId: "u1", printerModel: "HP LaserJet P3015", status: "online", signal: "Strong", lastSeen: "2026-04-01T10:30:00", totalPrints: 142, totalPages: 1276 },
  { id: "d2", name: "PrintEase-8B1C", userId: "u2", printerModel: "Canon MF264dw", status: "online", signal: "Strong", lastSeen: "2026-04-01T09:45:00", totalPrints: 87, totalPages: 643 },
  { id: "d3", name: "PrintEase-3E7D", userId: "u2", printerModel: "Brother HL-L2350DW", status: "offline", signal: "Weak", lastSeen: "2026-03-28T16:20:00", totalPrints: 34, totalPages: 210 },
  { id: "d4", name: "PrintEase-9A4F", userId: "u3", printerModel: "HP LaserJet P2055", status: "online", signal: "Medium", lastSeen: "2026-04-01T11:00:00", totalPrints: 203, totalPages: 1890 },
  { id: "d5", name: "PrintEase-1C8E", userId: "u4", printerModel: "Lexmark MS510", status: "online", signal: "Strong", lastSeen: "2026-04-01T08:15:00", totalPrints: 456, totalPages: 3200 },
  { id: "d6", name: "PrintEase-6D2B", userId: "u4", printerModel: "HP LaserJet 600", status: "online", signal: "Medium", lastSeen: "2026-03-31T17:30:00", totalPrints: 178, totalPages: 1450 },
  { id: "d7", name: "PrintEase-5F9A", userId: "u5", printerModel: "Canon LBP6030", status: "online", signal: "Strong", lastSeen: "2026-04-01T10:00:00", totalPrints: 95, totalPages: 720 },
  { id: "d8", name: "PrintEase-2A3C", userId: "u6", printerModel: "Brother HL-L5200DW", status: "offline", signal: "Weak", lastSeen: "2026-03-25T14:00:00", totalPrints: 67, totalPages: 490 },
  { id: "d9", name: "PrintEase-7E1F", userId: "u7", printerModel: "HP LaserJet P3015", status: "online", signal: "Strong", lastSeen: "2026-04-01T11:30:00", totalPrints: 312, totalPages: 2800 },
];

// ── User Dashboard KPIs ───────────────────────────────────────
export const userKpis: KpiData[] = [
  { label: "Total Prints", value: "142", icon: "printer", change: "+12%", changeType: "up" },
  { label: "Total Pages", value: "1,276", icon: "file-text", change: "+8%", changeType: "up" },
  { label: "Active Devices", value: "1", icon: "wifi", change: "0%", changeType: "up" },
  { label: "Est. Cost", value: "$63.00", icon: "dollar-sign", change: "-5%", changeType: "down" },
];

// ── Usage Trend ───────────────────────────────────────────────
export const usageTrendData: UsageTrendPoint[] = [
  { date: "Mar 1", prints: 18 },
  { date: "Mar 5", prints: 24 },
  { date: "Mar 9", prints: 15 },
  { date: "Mar 13", prints: 31 },
  { date: "Mar 17", prints: 22 },
  { date: "Mar 21", prints: 28 },
  { date: "Mar 25", prints: 35 },
  { date: "Mar 29", prints: 19 },
  { date: "Apr 1", prints: 12 },
];

// ── Top Users (for team accounts) ─────────────────────────────
export const topUsers: TopUser[] = [
  { id: "u1", name: "Accounting", team: "Finance", jobs: 58, pages: 412, cost: "$21.00", status: "active" },
  { id: "u2", name: "Front Office", team: "Admin", jobs: 45, pages: 380, cost: "$17.50", status: "active" },
  { id: "u3", name: "HR", team: "Human Resources", jobs: 30, pages: 276, cost: "$13.80", status: "warning" },
  { id: "u4", name: "Operations", team: "Ops", jobs: 24, pages: 195, cost: "$11.90", status: "active" },
  { id: "u5", name: "Marketing", team: "Marketing", jobs: 12, pages: 89, cost: "$5.20", status: "inactive" },
];

// ── WiFi Networks (setup wizard) ──────────────────────────────
export const wifiNetworks: WifiNetwork[] = [
  { ssid: "OfficeNetwork", signal: "Strong", secured: true },
  { ssid: "HomeWiFi-5G", signal: "Strong", secured: true },
  { ssid: "GuestNetwork", signal: "Medium", secured: false },
  { ssid: "PrintRoom-WiFi", signal: "Weak", secured: true },
];

// ── Detected Device (setup wizard) ────────────────────────────
export const detectedDevice: PrintEaseDevice = {
  id: "4F2A",
  name: "PrintEase-4F2A",
  signal: "Strong",
  status: "Ready to configure",
};

// ── Admin Dashboard KPIs ──────────────────────────────────────
export const adminKpis: AdminKpi[] = [
  { label: "Total Users", value: "8", icon: "users", change: "+3", changeType: "up" },
  { label: "Total Devices", value: "9", icon: "hard-drive", change: "+2", changeType: "up" },
  { label: "Active Subscriptions", value: "4", icon: "credit-card", change: "+1", changeType: "up" },
  { label: "Monthly Revenue", value: "$20.00", icon: "dollar-sign", change: "+33%", changeType: "up" },
];

// ── User Growth (admin chart) ─────────────────────────────────
export const userGrowthData: UserGrowthPoint[] = [
  { month: "Nov", users: 1 },
  { month: "Dec", users: 1 },
  { month: "Jan", users: 2 },
  { month: "Feb", users: 4 },
  { month: "Mar", users: 7 },
  { month: "Apr", users: 8 },
];

// ── Recent Activity (admin) ───────────────────────────────────
export const recentActivity: ActivityItem[] = [
  { id: "a1", type: "signup", message: "Lisa Chen signed up", timestamp: "2026-03-15T14:30:00" },
  { id: "a2", type: "setup", message: "Mark Rivera completed setup for PrintEase-7E1F", timestamp: "2026-03-05T09:15:00" },
  { id: "a3", type: "subscription", message: "HR Department subscribed to Analytics", timestamp: "2026-03-02T11:00:00" },
  { id: "a4", type: "print", message: "Front Office printed 45 jobs this week", timestamp: "2026-03-31T17:00:00" },
  { id: "a5", type: "setup", message: "Operations completed setup for PrintEase-2A3C", timestamp: "2026-03-10T10:45:00" },
  { id: "a6", type: "subscription", message: "Mark Rivera subscribed to Analytics", timestamp: "2026-03-06T14:20:00" },
];

// ── Subscription Data (admin) ─────────────────────────────────
export const subscriptionData: SubscriptionData = {
  totalSubscribers: 4,
  monthlyRevenue: "$20.00",
  churnRate: "0%",
  freeUsers: 4,
  paidUsers: 4,
};

// ── Analytics Features (for paywall) ──────────────────────────
export const analyticsFeatures = [
  "Real-time ink usage monitoring",
  "Estimated replacement timing",
  "High-cost print behavior detection",
  "Usage reports for cost allocation",
  "Team & employee breakdowns",
  "Monthly cost trend analysis",
];
