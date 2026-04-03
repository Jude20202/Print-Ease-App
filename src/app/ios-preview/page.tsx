"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Wifi,
  Bluetooth,
  Lock,
  ChevronRight,
  X,
  User,
  Eye,
  EyeOff,
  TrendingUp,
  TrendingDown,
  Printer,
  FileText,
  DollarSign,
  Activity,
  Droplets,
  AlertTriangle,
  RotateCcw,
  Shield,
  Bell,
  HelpCircle,
  LogOut,
  Zap,
  Send,
  File,
  Image,
  Plus,
  Check,
} from "lucide-react";

// ── Brand Colors (original) ──
const blue = "#2B4AE5";
const orange = "#E8622A";
const charcoal = "#1E1E1E";
const offWhite = "#F5F5F0";
const blueLight = "#EEF1FD";
const orangeLight = "#FEF3EE";
const green = "#16a34a";
const greenLight = "#dcfce7";
const yellow = "#d97706";
const yellowLight = "#fef3c7";
const red = "#dc2626";

// ── Mock Data (Pitch Deck) ──
const kpis = [
  { label: "Total Prints", value: "142", icon: Printer, change: "+12%", up: true },
  { label: "Pages Printed", value: "1,276", icon: FileText, change: "+8%", up: true },
  { label: "Active Devices", value: "1", icon: Activity, change: "—", up: true },
  { label: "Est. Cost Saved", value: "$63", icon: DollarSign, change: "-5%", up: false },
];

const weeklyUsage = [
  { day: "Mon", prints: 28 },
  { day: "Tue", prints: 35 },
  { day: "Wed", prints: 22 },
  { day: "Thu", prints: 41 },
  { day: "Fri", prints: 38 },
  { day: "Sat", prints: 8 },
  { day: "Sun", prints: 3 },
];

const monthlyTrend = [
  { month: "Oct", pages: 420 },
  { month: "Nov", pages: 580 },
  { month: "Dec", pages: 510 },
  { month: "Jan", pages: 720 },
  { month: "Feb", pages: 890 },
  { month: "Mar", pages: 1276 },
];

const inkLevels = [
  { color: "Black", level: 72, hex: "#1a1a1a" },
  { color: "Cyan", level: 45, hex: "#06b6d4" },
  { color: "Magenta", level: 58, hex: "#db2777" },
  { color: "Yellow", level: 31, hex: "#eab308" },
];

const costBreakdown = [
  { label: "Paper", amount: "$28.50", pct: 45, color: blue },
  { label: "Ink/Toner", amount: "$21.00", pct: 33, color: orange },
  { label: "Energy", amount: "$8.50", pct: 14, color: "#06b6d4" },
  { label: "Maintenance", amount: "$5.00", pct: 8, color: "#8b5cf6" },
];

const topDepartments = [
  { name: "Accounting", jobs: 58, pages: 412, cost: "$21.00", trend: "up" },
  { name: "Front Office", jobs: 45, pages: 380, cost: "$17.50", trend: "up" },
  { name: "HR", jobs: 30, pages: 276, cost: "$13.80", trend: "down" },
  { name: "Operations", jobs: 24, pages: 195, cost: "$11.90", trend: "up" },
];

const recentPrints = [
  { name: "Q1_Report.pdf", pages: 12, time: "2 min ago", dept: "Accounting" },
  { name: "Invoice_March.xlsx", pages: 3, time: "18 min ago", dept: "Front Office" },
  { name: "Handbook_v4.docx", pages: 24, time: "1 hr ago", dept: "HR" },
  { name: "Shipping_Labels.pdf", pages: 8, time: "2 hrs ago", dept: "Operations" },
];

const analyticsFeatures = [
  "Real-time ink & toner monitoring",
  "Cost breakdown by department",
  "Print volume trends & forecasts",
  "High-cost behavior alerts",
  "Usage reports for cost allocation",
];

const printableFiles = [
  { name: "Q1_Report.pdf", type: "PDF", pages: 12, size: "2.4 MB", icon: FileText },
  { name: "Team_Photo.jpg", type: "Image", pages: 1, size: "3.1 MB", icon: Image },
  { name: "Invoice_April.pdf", type: "PDF", pages: 3, size: "420 KB", icon: FileText },
  { name: "Meeting_Notes.docx", type: "Document", pages: 5, size: "890 KB", icon: File },
];

type Screen = "login" | "setup" | "dashboard";
type Tab = "home" | "printers" | "print" | "settings";
type AnalyticsTab = "overview" | "costs" | "usage";

export default function IOSPreview() {
  const [screen, setScreen] = useState<Screen>("login");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [tab, setTab] = useState<Tab>("home");
  const [analyticsTab, setAnalyticsTab] = useState<AnalyticsTab>("overview");
  const [subscribed, setSubscribed] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentStage, setPaymentStage] = useState<"form" | "processing" | "success">("form");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCompany, setUserCompany] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showRestart, setShowRestart] = useState(false);
  const [selectedWifi, setSelectedWifi] = useState("OfficeNetwork");
  // Print state
  const [printFile, setPrintFile] = useState<typeof printableFiles[0] | null>(null);
  const [printCopies, setPrintCopies] = useState(1);
  const [printColor, setPrintColor] = useState(true);
  const [printDuplex, setPrintDuplex] = useState(false);
  const [printStage, setPrintStage] = useState<"select" | "options" | "sending" | "done">("select");

  const simulateDelay = (ms: number, text: string, cb: () => void) => {
    setIsLoading(true);
    setLoadingText(text);
    setTimeout(() => { setIsLoading(false); setLoadingText(""); cb(); }, ms);
  };

  const handleLogin = () => {
    if (!loginEmail.includes("@") || !loginPassword) { setLoginError("Please enter a valid email and password."); return; }
    setLoginError("");
    setIsLoading(true);
    setLoadingText("Authenticating...");
    setTimeout(() => { setIsLoading(false); setLoadingText(""); setUserEmail(loginEmail); setScreen("setup"); }, 1000);
  };

  const handlePayment = () => {
    setPaymentStage("processing");
    setTimeout(() => { setPaymentStage("success"); setTimeout(() => { setSubscribed(true); setShowPayment(false); setPaymentStage("form"); }, 2000); }, 1500);
  };

  const handlePrint = () => {
    setPrintStage("sending");
    setTimeout(() => { setPrintStage("done"); }, 2000);
  };

  const resetDemo = () => {
    setShowRestart(false); setScreen("login"); setStep(1); setSubscribed(false);
    setUserName(""); setUserEmail(""); setUserCompany("");
    setLoginEmail(""); setLoginPassword(""); setLoginError("");
    setTab("home"); setAnalyticsTab("overview"); setShowPayment(false); setPaymentStage("form");
    setPrintFile(null); setPrintStage("select"); setPrintCopies(1);
  };

  const maxW = Math.max(...weeklyUsage.map((d) => d.prints));
  const maxM = Math.max(...monthlyTrend.map((d) => d.pages));

  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ background: "#e5e5e5" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.3s ease-out; }
        .slide-up { animation: slideUp 0.4s ease-out; }
      `}</style>

      <div className="text-center mb-4 absolute top-6">
        <h1 className="text-2xl font-bold" style={{ color: charcoal }}>
          <span>print</span><span style={{ color: orange }}>ease</span> iOS App Preview
        </h1>
        <p className="text-sm text-gray-500 mt-1">Interactive prototype — click through to explore</p>
      </div>

      {/* iPhone Shell */}
      <div className="relative rounded-[50px] overflow-hidden shadow-2xl" style={{ width: 390, height: 844, border: "8px solid #1a1a1a", background: offWhite }}>
        {/* Status Bar */}
        <div className="flex items-center justify-between px-8 pt-3 pb-1 text-xs font-semibold relative z-10" style={{ color: charcoal }}>
          <span>9:41</span>
          <div className="w-28 h-6 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2" />
          <span>100%</span>
        </div>

        {/* Content */}
        <div className="h-full overflow-y-auto pb-24" style={{ background: offWhite }}>
          {screen === "login" && <LoginScreen email={loginEmail} password={loginPassword} showPassword={showPassword} error={loginError} isLoading={isLoading} onEmail={setLoginEmail} onPassword={setLoginPassword} onTogglePassword={() => setShowPassword(!showPassword)} onLogin={handleLogin} />}
          {screen === "setup" && <SetupWizard step={step} isLoading={isLoading} loadingText={loadingText} userName={userName} userEmail={userEmail} userCompany={userCompany} selectedWifi={selectedWifi} onSelectWifi={setSelectedWifi} onUserName={setUserName} onUserEmail={setUserEmail} onUserCompany={setUserCompany} onNext={() => setStep((s) => s + 1)} onDiscovery={() => simulateDelay(2500, "Scanning for nearby devices...", () => setStep(4))} onConnect={() => simulateDelay(2000, "Establishing secure connection...", () => setStep(5))} onWifiConnect={() => simulateDelay(2500, "Configuring network settings...", () => setStep(6))} onDashboard={() => setScreen("dashboard")} />}
          {screen === "dashboard" && (
            <>
              {tab === "home" && <HomeTab userName={userName} subscribed={subscribed} analyticsTab={analyticsTab} onAnalyticsTab={setAnalyticsTab} maxW={maxW} maxM={maxM} onUpgrade={() => setShowPayment(true)} />}
              {tab === "printers" && <PrintersTab />}
              {tab === "print" && <PrintTab file={printFile} copies={printCopies} color={printColor} duplex={printDuplex} stage={printStage} onSelectFile={(f) => { setPrintFile(f); setPrintStage("options"); }} onCopies={setPrintCopies} onColor={setPrintColor} onDuplex={setPrintDuplex} onPrint={handlePrint} onBack={() => { setPrintFile(null); setPrintStage("select"); setPrintCopies(1); }} onDone={() => { setPrintFile(null); setPrintStage("select"); setPrintCopies(1); setTab("home"); }} />}
              {tab === "settings" && <SettingsTab userName={userName} userEmail={userEmail} userCompany={userCompany} subscribed={subscribed} onShowRestart={() => setShowRestart(true)} />}
            </>
          )}
        </div>

        {/* Tab Bar */}
        {screen === "dashboard" && (
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-2 pb-6 border-t" style={{ background: "white", borderColor: "#eee" }}>
            {([
              { id: "home" as Tab, label: "Home", Icon: Activity },
              { id: "print" as Tab, label: "Print", Icon: Send },
              { id: "printers" as Tab, label: "Printers", Icon: Printer },
              { id: "settings" as Tab, label: "Settings", Icon: User },
            ]).map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} className="flex flex-col items-center gap-0.5 cursor-pointer">
                <t.Icon size={20} color={tab === t.id ? blue : "#b0b0b0"} strokeWidth={tab === t.id ? 2.5 : 1.8} />
                <span className="text-[10px] font-medium" style={{ color: tab === t.id ? blue : "#b0b0b0" }}>{t.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Payment Sheet */}
        {showPayment && (
          <div className="absolute inset-0 flex items-end" style={{ background: "rgba(0,0,0,0.5)", zIndex: 50 }}>
            <div className="w-full rounded-t-3xl p-5 pb-10 overflow-y-auto slide-up" style={{ background: "white", maxHeight: "85%" }}>
              {paymentStage === "form" && (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-base" style={{ color: charcoal }}>Upgrade to Analytics</span>
                    <button onClick={() => setShowPayment(false)} className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" style={{ background: "#f5f5f5" }}><X size={16} color="#999" /></button>
                  </div>
                  <div className="rounded-xl p-3 mb-4" style={{ background: blueLight }}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs font-semibold" style={{ color: blue }}>Analytics Pro</span>
                      <span><span className="text-xl font-bold" style={{ color: charcoal }}>$5</span><span className="text-[10px] text-gray-400">/mo per adapter</span></span>
                    </div>
                    {analyticsFeatures.map((f) => (<div key={f} className="flex items-center gap-1.5 mb-1"><CheckCircle2 size={10} color={blue} /><span className="text-[10px] text-gray-500">{f}</span></div>))}
                  </div>
                  <div className="flex items-center gap-1.5 mb-3"><Lock size={10} color="#999" /><span className="text-[10px] text-gray-400">Secure payment - demo mode</span></div>
                  {[{ label: "Card Number", value: "4242 4242 4242 4242" }, { label: "Expiry", value: "12/28" }, { label: "CVC", value: "123" }, { label: "Name on Card", value: userName || "Alex Johnson" }].map((f) => (
                    <div key={f.label} className="mb-2.5"><label className="text-[10px] font-medium block mb-1" style={{ color: charcoal }}>{f.label}</label><div className="rounded-lg px-3 py-2 text-xs" style={{ background: "#f5f5f5" }}>{f.value}</div></div>
                  ))}
                  <button onClick={handlePayment} className="w-full rounded-xl py-3 text-white text-sm font-semibold mt-2 cursor-pointer" style={{ background: orange }}>Subscribe - $5.00/mo</button>
                </>
              )}
              {paymentStage === "processing" && (<div className="flex flex-col items-center py-12"><div className="w-10 h-10 border-4 rounded-full animate-spin mb-4" style={{ borderColor: `${orange} transparent transparent transparent` }} /><p className="text-sm font-medium" style={{ color: charcoal }}>Processing payment...</p><p className="text-[10px] text-gray-400 mt-1">Demo - no real charge</p></div>)}
              {paymentStage === "success" && (<div className="flex flex-col items-center py-12"><div className="w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ background: greenLight }}><CheckCircle2 size={28} color={green} /></div><p className="text-base font-bold" style={{ color: charcoal }}>You&apos;re Subscribed!</p><p className="text-xs text-gray-400 mt-1 text-center">Analytics is now unlocking...</p></div>)}
            </div>
          </div>
        )}

        {/* Restart Modal */}
        {showRestart && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.5)", zIndex: 60 }}>
            <div className="mx-6 rounded-2xl p-6 fade-in" style={{ background: "white", width: "100%", maxWidth: 320 }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: blueLight }}><RotateCcw size={24} color={blue} /></div>
              <h3 className="text-base font-bold text-center mb-1" style={{ color: charcoal }}>Restart Demo?</h3>
              <p className="text-xs text-gray-400 text-center mb-5">This resets everything back to the login screen.</p>
              <button onClick={resetDemo} className="w-full rounded-xl py-3 text-white text-sm font-semibold cursor-pointer mb-2" style={{ background: blue }}>Restart from Beginning</button>
              <button onClick={() => setShowRestart(false)} className="w-full rounded-xl py-3 text-sm font-medium cursor-pointer" style={{ color: "#999" }}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Login ──
function LoginScreen({ email, password, showPassword, error, isLoading, onEmail, onPassword, onTogglePassword, onLogin }: {
  email: string; password: string; showPassword: boolean; error: string; isLoading: boolean;
  onEmail: (v: string) => void; onPassword: (v: string) => void; onTogglePassword: () => void; onLogin: () => void;
}) {
  return (
    <div className="px-6 pt-16 pb-6 flex flex-col min-h-[780px]" style={{ background: offWhite }}>
      <div className="text-center mb-6">
        <span className="text-3xl font-bold"><span style={{ color: charcoal }}>print</span><span style={{ color: orange }}>ease</span></span>
        <p className="text-xs text-gray-400 mt-2">Sign in to manage your printers</p>
      </div>
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
        <div className="space-y-3.5 mb-4">
          <div>
            <label className="text-[11px] font-semibold block mb-1" style={{ color: charcoal }}>Email</label>
            <input type="email" value={email} onChange={(e) => onEmail(e.target.value)} placeholder="you@example.com" className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={{ background: "#f5f5f5", border: `1.5px solid ${email ? blue + "40" : "transparent"}` }} />
          </div>
          <div>
            <label className="text-[11px] font-semibold block mb-1" style={{ color: charcoal }}>Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => onPassword(e.target.value)} placeholder="Enter your password" className="w-full rounded-xl px-4 py-3 text-sm outline-none pr-10" style={{ background: "#f5f5f5", border: `1.5px solid ${password ? blue + "40" : "transparent"}` }} />
              <button onClick={onTogglePassword} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">{showPassword ? <EyeOff size={16} color="#b0b0b0" /> : <Eye size={16} color="#b0b0b0" />}</button>
            </div>
          </div>
        </div>
        {error && <div className="rounded-xl px-3 py-2 mb-3 text-xs font-medium flex items-center gap-2" style={{ background: "#fef2f2", color: red }}><AlertTriangle size={12} /> {error}</div>}
        <button onClick={onLogin} disabled={isLoading} className="w-full rounded-xl py-3 text-white text-sm font-semibold cursor-pointer disabled:opacity-60 mb-2" style={{ background: blue }}>{isLoading ? "Signing in..." : "Sign In"}</button>
        <button className="text-xs font-medium cursor-pointer mx-auto block" style={{ color: blue }}>Forgot password?</button>
      </div>
      <div className="flex items-center gap-3 mb-4"><div className="flex-1 h-px bg-gray-200" /><span className="text-[10px] text-gray-400">OR</span><div className="flex-1 h-px bg-gray-200" /></div>
      <div className="flex gap-3 mb-5">
        <button className="flex-1 bg-white rounded-xl py-2.5 text-xs font-medium cursor-pointer flex items-center justify-center gap-2 shadow-sm" style={{ color: charcoal }}>G Google</button>
        <button className="flex-1 bg-white rounded-xl py-2.5 text-xs font-medium cursor-pointer flex items-center justify-center gap-2 shadow-sm" style={{ color: charcoal }}> Apple</button>
      </div>
      <div className="rounded-xl p-3 mt-auto" style={{ background: blueLight }}>
        <div className="flex justify-between items-center">
          <div><p className="text-[10px] font-bold mb-0.5" style={{ color: blue }}>Demo Credentials</p><p className="text-[10px] text-gray-500">user@printease.com / demo123</p></div>
          <button onClick={() => { onEmail("user@printease.com"); onPassword("demo123"); }} className="text-[10px] font-bold cursor-pointer px-3 py-1.5 rounded-lg text-white" style={{ background: blue }}>Auto-fill</button>
        </div>
      </div>
    </div>
  );
}

// ── Setup Wizard ──
function SetupWizard({ step, isLoading, loadingText, userName, userEmail, userCompany, selectedWifi, onSelectWifi, onUserName, onUserEmail, onUserCompany, onNext, onDiscovery, onConnect, onWifiConnect, onDashboard }: {
  step: number; isLoading: boolean; loadingText: string; userName: string; userEmail: string; userCompany: string; selectedWifi: string;
  onSelectWifi: (v: string) => void; onUserName: (v: string) => void; onUserEmail: (v: string) => void; onUserCompany: (v: string) => void;
  onNext: () => void; onDiscovery: () => void; onConnect: () => void; onWifiConnect: () => void; onDashboard: () => void;
}) {
  const progress = (step / 6) * 100;
  const wifiNetworks = [
    { name: "OfficeNetwork", signal: 4, secured: true },
    { name: "HomeWiFi-5G", signal: 3, secured: true },
    { name: "GuestNetwork", signal: 2, secured: false },
  ];

  return (
    <div className="px-5 pt-10 fade-in">
      <div className="text-center mb-2"><span className="text-xl font-bold"><span style={{ color: charcoal }}>print</span><span style={{ color: orange }}>ease</span></span></div>
      <div className="mb-1"><div className="w-full h-1 rounded-full" style={{ background: "#e0e0dc" }}><div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: blue }} /></div></div>
      <p className="text-[9px] text-gray-400 text-right mb-4">Step {step} of 6</p>
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        {step === 1 && (
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: blueLight }}><Zap size={24} color={blue} /></div>
            <h2 className="text-lg font-bold mb-1" style={{ color: charcoal }}>Welcome to Print Ease</h2>
            <p className="text-xs text-gray-400 mb-5">Let&apos;s get your printer connected to WiFi.</p>
            <div className="rounded-xl p-4 mb-5 text-left space-y-3" style={{ background: "#fafaf8" }}>
              {[{ n: "1", t: "Plug Print Ease adapter into your printer's USB port" }, { n: "2", t: "Connect adapter to power via USB-C" }, { n: "3", t: "Keep your phone nearby with Bluetooth on" }].map((i) => (
                <div key={i.n} className="flex items-start gap-3"><div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold text-white" style={{ background: blue }}>{i.n}</div><span className="text-xs leading-relaxed" style={{ color: charcoal }}>{i.t}</span></div>
              ))}
            </div>
            <button onClick={onNext} className="w-full rounded-xl py-3 text-white text-sm font-semibold cursor-pointer" style={{ background: blue }}>Start Setup</button>
          </div>
        )}
        {step === 2 && (
          <div className="text-center fade-in">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: blueLight }}><User size={24} color={blue} /></div>
            <h2 className="text-lg font-bold mb-1" style={{ color: charcoal }}>Your Information</h2>
            <p className="text-xs text-gray-400 mb-4">Personalize your dashboard experience.</p>
            <div className="text-left space-y-3">
              {[{ l: "Full Name", v: userName, fn: onUserName, p: "Alex Johnson", r: true }, { l: "Email", v: userEmail, fn: onUserEmail, p: "you@example.com", r: true }, { l: "Company", v: userCompany, fn: onUserCompany, p: "Your organization", r: false }].map((f) => (
                <div key={f.l}><label className="text-[11px] font-semibold block mb-1" style={{ color: charcoal }}>{f.l} {!f.r && <span className="text-gray-400 font-normal">(optional)</span>}</label><input value={f.v} onChange={(e) => f.fn(e.target.value)} placeholder={f.p} className="w-full rounded-xl px-3.5 py-2.5 text-xs outline-none" style={{ background: "#f5f5f5", border: `1.5px solid ${f.v ? blue + "30" : "transparent"}` }} /></div>
              ))}
            </div>
            <button onClick={onNext} disabled={!userName.trim() || !userEmail.includes("@")} className="w-full rounded-xl py-3 text-white text-sm font-semibold mt-4 cursor-pointer disabled:opacity-30" style={{ background: blue }}>Continue</button>
          </div>
        )}
        {step === 3 && (
          <div className="text-center fade-in">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: blueLight }}><Bluetooth size={24} color={blue} /></div>
            <h2 className="text-lg font-bold mb-1" style={{ color: charcoal }}>Bluetooth Discovery</h2>
            <p className="text-xs text-gray-400 mb-4">Scanning for Print Ease adapters nearby.</p>
            {isLoading ? (
              <div className="py-6"><div className="relative w-20 h-20 mx-auto mb-4"><div className="absolute inset-0 rounded-full border-4 opacity-20" style={{ borderColor: blue }} /><div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin" style={{ borderTopColor: blue }} /><Bluetooth size={20} color={blue} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /></div><p className="text-xs font-medium" style={{ color: charcoal }}>{loadingText}</p></div>
            ) : (
              <><div className="rounded-xl p-3 mb-5 text-xs flex items-center gap-2" style={{ background: blueLight, color: blue }}><Bluetooth size={14} />Ensure Bluetooth is enabled before proceeding</div><button onClick={onDiscovery} className="w-full rounded-xl py-3 text-white text-sm font-semibold cursor-pointer" style={{ background: blue }}>Start Discovery</button></>
            )}
          </div>
        )}
        {step === 4 && (
          <div className="text-center fade-in">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: greenLight }}><CheckCircle2 size={24} color={green} /></div>
            <h2 className="text-lg font-bold mb-1" style={{ color: charcoal }}>Device Found!</h2>
            <p className="text-xs text-gray-400 mb-4">A Print Ease adapter was detected nearby.</p>
            <div className="rounded-xl p-4 mb-4 text-left" style={{ background: "#fafaf8", border: "1px solid #eee" }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: blueLight }}><Printer size={18} color={blue} /></div><div><p className="text-sm font-bold" style={{ color: charcoal }}>PrintEase-4F2A</p><p className="text-[10px] text-gray-400">Firmware v2.1.0</p></div></div>
                <div className="flex gap-0.5">{[1, 2, 3, 4].map((b) => (<div key={b} className="w-1 rounded-full" style={{ height: 4 + b * 3, background: b <= 3 ? green : "#ddd" }} />))}</div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-3" style={{ borderTop: "1px solid #eee" }}>
                <div><p className="text-[9px] text-gray-400">Signal</p><p className="text-[11px] font-semibold" style={{ color: green }}>Strong</p></div>
                <div><p className="text-[9px] text-gray-400">Type</p><p className="text-[11px] font-semibold" style={{ color: charcoal }}>USB</p></div>
                <div><p className="text-[9px] text-gray-400">Status</p><p className="text-[11px] font-semibold" style={{ color: charcoal }}>Ready</p></div>
              </div>
            </div>
            {isLoading ? (<div className="py-4"><div className="w-8 h-8 border-3 rounded-full animate-spin mx-auto mb-2" style={{ borderColor: `${blue} transparent transparent transparent` }} /><p className="text-xs" style={{ color: charcoal }}>{loadingText}</p></div>) : (
              <button onClick={onConnect} className="w-full rounded-xl py-3 text-white text-sm font-semibold cursor-pointer" style={{ background: blue }}>Connect to Device</button>
            )}
          </div>
        )}
        {step === 5 && (
          <div className="text-center fade-in">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: blueLight }}><Wifi size={24} color={blue} /></div>
            <h2 className="text-lg font-bold mb-1" style={{ color: charcoal }}>WiFi Configuration</h2>
            <p className="text-xs text-gray-400 mb-4">Select the network for your printer.</p>
            {isLoading ? (
              <div className="py-6"><div className="w-10 h-10 border-4 rounded-full animate-spin mx-auto mb-3" style={{ borderColor: `${charcoal} transparent transparent transparent` }} /><p className="text-xs font-medium" style={{ color: charcoal }}>{loadingText}</p></div>
            ) : (
              <>
                <div className="text-left mb-4">
                  <label className="text-[11px] font-semibold block mb-2" style={{ color: charcoal }}>Available Networks</label>
                  <div className="space-y-2">
                    {wifiNetworks.map((net) => (
                      <button key={net.name} onClick={() => onSelectWifi(net.name)} className="w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 cursor-pointer text-left transition-all" style={{ background: selectedWifi === net.name ? blueLight : "#f5f5f5", border: `1.5px solid ${selectedWifi === net.name ? blue + "40" : "transparent"}` }}>
                        <div className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center" style={{ borderColor: selectedWifi === net.name ? blue : "#ccc" }}>
                            {selectedWifi === net.name && <div className="w-2 h-2 rounded-full" style={{ background: blue }} />}
                          </div>
                          <span className="text-xs font-medium" style={{ color: charcoal }}>{net.name}</span>
                          {net.secured && <Lock size={9} color="#999" />}
                        </div>
                        <div className="flex gap-0.5">{[1, 2, 3, 4].map((b) => (<div key={b} className="w-0.5 rounded-full" style={{ height: 3 + b * 2, background: b <= net.signal ? charcoal : "#ddd" }} />))}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="text-left mb-4"><label className="text-[11px] font-semibold block mb-1" style={{ color: charcoal }}>Password</label><input type="password" defaultValue="password123" className="w-full rounded-xl px-3.5 py-2.5 text-xs outline-none" style={{ background: "#f5f5f5" }} /></div>
                <button onClick={onWifiConnect} className="w-full rounded-xl py-3 text-white text-sm font-semibold cursor-pointer" style={{ background: charcoal }}>Connect to Network</button>
              </>
            )}
          </div>
        )}
        {step === 6 && (
          <div className="text-center fade-in">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: greenLight }}><CheckCircle2 size={32} color={green} /></div>
            <h2 className="text-xl font-bold mb-1" style={{ color: charcoal }}>Setup Complete!</h2>
            <p className="text-xs text-gray-400 mb-5">Your printer is wireless and ready.</p>
            <div className="rounded-xl p-4 mb-5 text-left" style={{ background: "#fafaf8" }}>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Connection Summary</p>
              {[{ l: "Device", v: "PrintEase-4F2A" }, { l: "Network", v: selectedWifi }, { l: "IP Address", v: "192.168.1.142" }, { l: "Status", v: "Connected", c: green }].map((r) => (
                <div key={r.l} className="flex justify-between py-1.5"><span className="text-[11px] text-gray-400">{r.l}</span><span className="text-[11px] font-semibold" style={{ color: (r as { c?: string }).c || charcoal }}>{r.v}</span></div>
              ))}
            </div>
            <button onClick={onDashboard} className="w-full rounded-xl py-3 text-white text-sm font-semibold cursor-pointer mb-2" style={{ background: blue }}>Open Dashboard</button>
            <button className="w-full rounded-xl py-3 text-sm font-medium border cursor-pointer" style={{ color: charcoal, borderColor: "#e0e0e0" }}>Print Test Page</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Analytics Content (shared between blurred + unlocked) ──
function AnalyticsContent({ analyticsTab, onAnalyticsTab, maxW, maxM }: { analyticsTab: AnalyticsTab; onAnalyticsTab: (t: AnalyticsTab) => void; maxW: number; maxM: number; }) {
  return (
    <>
      <div className="flex gap-1 rounded-xl p-1 mb-3" style={{ background: "#e0e0dc" }}>
        {(["overview", "costs", "usage"] as AnalyticsTab[]).map((t) => (
          <button key={t} onClick={() => onAnalyticsTab(t)} className="flex-1 rounded-lg py-1.5 text-[10px] font-semibold cursor-pointer capitalize" style={{ background: analyticsTab === t ? "white" : "transparent", color: analyticsTab === t ? charcoal : "#999", boxShadow: analyticsTab === t ? "0 1px 3px rgba(0,0,0,0.08)" : "none" }}>{t}</button>
        ))}
      </div>
      {analyticsTab === "overview" && (
        <>
          <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
            <div className="flex justify-between items-center mb-3"><p className="text-xs font-semibold" style={{ color: charcoal }}>Weekly Print Volume</p><span className="text-[9px] px-2 py-0.5 rounded-full font-medium" style={{ background: greenLight, color: green }}>This week</span></div>
            <div className="flex items-end gap-2 h-24">
              {weeklyUsage.map((d) => (<div key={d.day} className="flex-1 flex flex-col items-center"><div className="text-[8px] font-bold mb-1" style={{ color: charcoal }}>{d.prints}</div><div className="w-full rounded-t-lg" style={{ height: `${(d.prints / maxW) * 70}px`, background: d.day === "Thu" ? orange : blue, opacity: d.day === "Sat" || d.day === "Sun" ? 0.3 : 1 }} /><span className="text-[8px] text-gray-400 mt-1">{d.day}</span></div>))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
            <div className="flex justify-between items-center mb-3"><p className="text-xs font-semibold" style={{ color: charcoal }}>Ink / Toner Levels</p><Droplets size={14} color={blue} /></div>
            {inkLevels.map((ink) => (<div key={ink.color} className="mb-2.5 last:mb-0"><div className="flex justify-between items-center mb-1"><span className="text-[10px] font-medium" style={{ color: charcoal }}>{ink.color}</span><div className="flex items-center gap-1">{ink.level < 35 && <AlertTriangle size={9} color={yellow} />}<span className="text-[10px] font-bold" style={{ color: ink.level < 35 ? yellow : charcoal }}>{ink.level}%</span></div></div><div className="w-full h-2.5 rounded-full" style={{ background: "#f3f4f6" }}><div className="h-full rounded-full" style={{ width: `${ink.level}%`, background: ink.hex }} /></div></div>))}
            <div className="mt-3 rounded-lg p-2 flex items-center gap-2" style={{ background: yellowLight }}><AlertTriangle size={11} color={yellow} /><span className="text-[9px] font-medium" style={{ color: yellow }}>Yellow toner low — reorder recommended</span></div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
            <p className="text-xs font-semibold mb-3" style={{ color: charcoal }}>Recent Print Jobs</p>
            {recentPrints.map((p) => (<div key={p.name} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: blueLight }}><FileText size={12} color={blue} /></div><div><p className="text-[11px] font-medium" style={{ color: charcoal }}>{p.name}</p><p className="text-[9px] text-gray-400">{p.dept} &middot; {p.pages} pages</p></div></div><span className="text-[9px] text-gray-400">{p.time}</span></div>))}
          </div>
        </>
      )}
      {analyticsTab === "costs" && (
        <>
          <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
            <p className="text-xs font-semibold mb-1" style={{ color: charcoal }}>Monthly Cost Breakdown</p><p className="text-[10px] text-gray-400 mb-3">Total: $63.00 this month</p>
            <div className="w-full h-5 rounded-full overflow-hidden flex mb-3">{costBreakdown.map((c) => (<div key={c.label} style={{ width: `${c.pct}%`, background: c.color }} className="h-full" />))}</div>
            {costBreakdown.map((c) => (<div key={c.label} className="flex items-center justify-between py-1.5"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-sm" style={{ background: c.color }} /><span className="text-[10px]" style={{ color: charcoal }}>{c.label}</span></div><div className="flex items-center gap-2"><span className="text-[10px] font-semibold" style={{ color: charcoal }}>{c.amount}</span><span className="text-[9px] text-gray-400">{c.pct}%</span></div></div>))}
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
            <p className="text-xs font-semibold mb-3" style={{ color: charcoal }}>Cost by Department</p>
            {topDepartments.map((d) => (<div key={d.name} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"><div><p className="text-[11px] font-medium" style={{ color: charcoal }}>{d.name}</p><p className="text-[9px] text-gray-400">{d.jobs} jobs &middot; {d.pages} pages</p></div><div className="flex items-center gap-2"><span className="text-[11px] font-bold" style={{ color: charcoal }}>{d.cost}</span>{d.trend === "up" ? <TrendingUp size={10} color={red} /> : <TrendingDown size={10} color={green} />}</div></div>))}
          </div>
          <div className="rounded-xl p-3 mb-3 flex items-start gap-2.5" style={{ background: orangeLight }}><AlertTriangle size={14} color={orange} className="mt-0.5 shrink-0" /><div><p className="text-[11px] font-semibold" style={{ color: orange }}>High-Cost Alert</p><p className="text-[10px] text-gray-500 mt-0.5">Accounting dept 24% above average this month.</p></div></div>
        </>
      )}
      {analyticsTab === "usage" && (
        <>
          <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
            <p className="text-xs font-semibold mb-1" style={{ color: charcoal }}>Pages Printed (6 Month Trend)</p><p className="text-[10px] text-gray-400 mb-3">+18% month-over-month</p>
            <div className="relative h-28">
              {[0, 0.25, 0.5, 0.75, 1].map((p) => (<div key={p} className="absolute w-full border-t border-gray-100" style={{ bottom: `${p * 100}%` }} />))}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 112" preserveAspectRatio="none">
                <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={blue} stopOpacity="0.15" /><stop offset="100%" stopColor={blue} stopOpacity="0" /></linearGradient></defs>
                <path d={`M0,${112 - (monthlyTrend[0].pages / maxM) * 112} ${monthlyTrend.map((d, i) => `L${(i / (monthlyTrend.length - 1)) * 300},${112 - (d.pages / maxM) * 112}`).join(" ")} L300,112 L0,112 Z`} fill="url(#ag)" />
                <polyline fill="none" stroke={blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={monthlyTrend.map((d, i) => `${(i / (monthlyTrend.length - 1)) * 300},${112 - (d.pages / maxM) * 112}`).join(" ")} />
                {monthlyTrend.map((d, i) => (<circle key={d.month} cx={(i / (monthlyTrend.length - 1)) * 300} cy={112 - (d.pages / maxM) * 112} r="4" fill="white" stroke={blue} strokeWidth="2" />))}
              </svg>
            </div>
            <div className="flex justify-between mt-2">{monthlyTrend.map((d) => (<span key={d.month} className="text-[8px] text-gray-400">{d.month}</span>))}</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
            <p className="text-xs font-semibold mb-3" style={{ color: charcoal }}>Peak Print Hours</p>
            {[{ t: "9:00 - 10:00 AM", p: 85, l: "Peak" }, { t: "1:00 - 2:00 PM", p: 70, l: "High" }, { t: "3:00 - 4:00 PM", p: 55, l: "Medium" }, { t: "11:00 - 12:00 PM", p: 40, l: "Low" }].map((h) => (<div key={h.t} className="mb-2.5"><div className="flex justify-between items-center mb-1"><span className="text-[10px]" style={{ color: charcoal }}>{h.t}</span><span className="text-[9px] font-bold" style={{ color: h.p > 75 ? orange : h.p > 50 ? blue : "#999" }}>{h.l}</span></div><div className="w-full h-2 rounded-full" style={{ background: "#f3f4f6" }}><div className="h-full rounded-full" style={{ width: `${h.p}%`, background: h.p > 75 ? orange : blue }} /></div></div>))}
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
            <p className="text-xs font-semibold mb-3" style={{ color: charcoal }}>Device Utilization</p>
            <div className="flex items-center justify-center mb-3"><div className="relative w-24 h-24"><svg className="w-full h-full -rotate-90" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="10" /><circle cx="50" cy="50" r="40" fill="none" stroke={blue} strokeWidth="10" strokeDasharray={`${68 * 2.51} ${100 * 2.51}`} strokeLinecap="round" /></svg><div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-lg font-bold" style={{ color: charcoal }}>68%</span><span className="text-[8px] text-gray-400">Utilized</span></div></div></div>
            <div className="flex justify-around text-center"><div><p className="text-sm font-bold" style={{ color: charcoal }}>142</p><p className="text-[9px] text-gray-400">Total Jobs</p></div><div><p className="text-sm font-bold" style={{ color: charcoal }}>4.2</p><p className="text-[9px] text-gray-400">Avg/Day</p></div><div><p className="text-sm font-bold" style={{ color: charcoal }}>99.2%</p><p className="text-[9px] text-gray-400">Uptime</p></div></div>
          </div>
        </>
      )}
    </>
  );
}

// ── Home Tab ──
function HomeTab({ userName, subscribed, analyticsTab, onAnalyticsTab, maxW, maxM, onUpgrade }: {
  userName: string; subscribed: boolean; analyticsTab: AnalyticsTab; onAnalyticsTab: (t: AnalyticsTab) => void; maxW: number; maxM: number; onUpgrade: () => void;
}) {
  return (
    <div className="px-4 pt-14">
      <div className="flex items-center justify-between mb-1">
        <span className="text-base font-bold"><span style={{ color: charcoal }}>print</span><span style={{ color: orange }}>ease</span></span>
        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: blueLight }}><User size={14} color={blue} /></div>
      </div>
      <h1 className="text-lg font-bold" style={{ color: charcoal }}>Dashboard</h1>
      <p className="text-xs text-gray-400 mb-4">Welcome back, {userName.split(" ")[0] || "User"}</p>
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white rounded-xl p-3 shadow-sm">
            <div className="flex justify-between items-start mb-1.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: blueLight }}><k.icon size={14} color={blue} /></div>
              {k.change !== "—" && (<div className="flex items-center gap-0.5"><span className="text-[9px] font-medium" style={{ color: k.up ? green : orange }}>{k.change}</span></div>)}
            </div>
            <p className="text-xl font-bold" style={{ color: charcoal }}>{k.value}</p>
            <p className="text-[10px] text-gray-400">{k.label}</p>
          </div>
        ))}
      </div>

      {subscribed ? (
        <AnalyticsContent analyticsTab={analyticsTab} onAnalyticsTab={onAnalyticsTab} maxW={maxW} maxM={maxM} />
      ) : (
        <div className="relative">
          {/* Real analytics content - blurred */}
          <div className="filter blur-[6px] opacity-50 pointer-events-none select-none">
            <AnalyticsContent analyticsTab={analyticsTab} onAnalyticsTab={() => {}} maxW={maxW} maxM={maxM} />
          </div>
          {/* Lock overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-5 shadow-lg text-center max-w-[260px]">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: orangeLight }}><Lock size={22} color={orange} /></div>
              <p className="text-sm font-bold mb-1" style={{ color: charcoal }}>Unlock Analytics</p>
              <p className="text-[10px] text-gray-400 mb-2">Get detailed insights into your print usage, costs, and ink levels.</p>
              <div className="text-left space-y-1.5 mb-3">{analyticsFeatures.slice(0, 3).map((f) => (<div key={f} className="flex items-center gap-1.5"><CheckCircle2 size={10} color={blue} /><span className="text-[9px] text-gray-500">{f}</span></div>))}</div>
              <button onClick={onUpgrade} className="w-full rounded-xl py-2.5 text-white text-xs font-semibold cursor-pointer" style={{ background: orange }}>Upgrade - $5/mo</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Print Tab ──
function PrintTab({ file, copies, color, duplex, stage, onSelectFile, onCopies, onColor, onDuplex, onPrint, onBack, onDone }: {
  file: typeof printableFiles[0] | null; copies: number; color: boolean; duplex: boolean;
  stage: string; onSelectFile: (f: typeof printableFiles[0]) => void;
  onCopies: (n: number) => void; onColor: (b: boolean) => void; onDuplex: (b: boolean) => void;
  onPrint: () => void; onBack: () => void; onDone: () => void;
}) {
  return (
    <div className="px-4 pt-14">
      <h1 className="text-lg font-bold" style={{ color: charcoal }}>Print</h1>
      <p className="text-xs text-gray-400 mb-4">Send documents to your printer wirelessly</p>

      {stage === "select" && (
        <div className="fade-in">
          <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
            <p className="text-xs font-semibold mb-3" style={{ color: charcoal }}>Select a File</p>
            {printableFiles.map((f) => (
              <button key={f.name} onClick={() => onSelectFile(f)} className="w-full flex items-center justify-between py-3 border-b border-gray-50 last:border-0 cursor-pointer text-left">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: blueLight }}><f.icon size={16} color={blue} /></div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: charcoal }}>{f.name}</p>
                    <p className="text-[9px] text-gray-400">{f.type} &middot; {f.pages} {f.pages === 1 ? "page" : "pages"} &middot; {f.size}</p>
                  </div>
                </div>
                <ChevronRight size={14} color="#ccc" />
              </button>
            ))}
          </div>
          <button className="w-full rounded-xl py-3 text-sm font-medium border cursor-pointer flex items-center justify-center gap-2" style={{ borderColor: "#e0e0e0", color: blue }}><Plus size={14} /> Upload New File</button>
        </div>
      )}

      {stage === "options" && file && (
        <div className="fade-in">
          <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-50">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: blueLight }}><FileText size={18} color={blue} /></div>
              <div><p className="text-sm font-semibold" style={{ color: charcoal }}>{file.name}</p><p className="text-[10px] text-gray-400">{file.pages} {file.pages === 1 ? "page" : "pages"} &middot; {file.size}</p></div>
            </div>
            <p className="text-xs font-semibold mb-3" style={{ color: charcoal }}>Print Settings</p>
            {/* Printer */}
            <div className="flex items-center justify-between py-2.5 border-b border-gray-50">
              <span className="text-xs text-gray-500">Printer</span>
              <span className="text-xs font-medium" style={{ color: charcoal }}>PrintEase-4F2A</span>
            </div>
            {/* Copies */}
            <div className="flex items-center justify-between py-2.5 border-b border-gray-50">
              <span className="text-xs text-gray-500">Copies</span>
              <div className="flex items-center gap-2">
                <button onClick={() => onCopies(Math.max(1, copies - 1))} className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-xs font-bold" style={{ background: "#f0f0f0", color: charcoal }}>-</button>
                <span className="text-xs font-bold w-4 text-center" style={{ color: charcoal }}>{copies}</span>
                <button onClick={() => onCopies(Math.min(99, copies + 1))} className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-xs font-bold" style={{ background: blueLight, color: blue }}>+</button>
              </div>
            </div>
            {/* Color */}
            <div className="flex items-center justify-between py-2.5 border-b border-gray-50">
              <span className="text-xs text-gray-500">Color</span>
              <button onClick={() => onColor(!color)} className="w-10 h-5.5 rounded-full p-0.5 cursor-pointer transition-all" style={{ background: color ? blue : "#ddd" }}>
                <div className="w-4.5 h-4.5 rounded-full bg-white shadow-sm transition-all" style={{ marginLeft: color ? 18 : 0, width: 18, height: 18 }} />
              </button>
            </div>
            {/* Duplex */}
            <div className="flex items-center justify-between py-2.5">
              <span className="text-xs text-gray-500">Double-Sided</span>
              <button onClick={() => onDuplex(!duplex)} className="w-10 h-5.5 rounded-full p-0.5 cursor-pointer transition-all" style={{ background: duplex ? blue : "#ddd" }}>
                <div className="w-4.5 h-4.5 rounded-full bg-white shadow-sm transition-all" style={{ marginLeft: duplex ? 18 : 0, width: 18, height: 18 }} />
              </button>
            </div>
          </div>
          {/* Summary */}
          <div className="rounded-xl p-3 mb-4" style={{ background: blueLight }}>
            <div className="flex justify-between text-[10px]">
              <span style={{ color: blue }}>Total pages: {file.pages * copies}{duplex ? " (double-sided)" : ""}</span>
              <span className="font-bold" style={{ color: blue }}>Est. cost: ${(file.pages * copies * 0.05).toFixed(2)}</span>
            </div>
          </div>
          <button onClick={onPrint} className="w-full rounded-xl py-3 text-white text-sm font-semibold cursor-pointer mb-2 flex items-center justify-center gap-2" style={{ background: blue }}><Send size={14} /> Send to Printer</button>
          <button onClick={onBack} className="w-full rounded-xl py-3 text-sm font-medium cursor-pointer" style={{ color: "#999" }}>Back</button>
        </div>
      )}

      {stage === "sending" && (
        <div className="flex flex-col items-center py-16 fade-in">
          <div className="relative w-20 h-20 mb-4">
            <div className="absolute inset-0 rounded-full border-4 opacity-20" style={{ borderColor: blue }} />
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin" style={{ borderTopColor: blue }} />
            <Printer size={24} color={blue} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="text-sm font-semibold" style={{ color: charcoal }}>Sending to printer...</p>
          <p className="text-[10px] text-gray-400 mt-1">{file?.name} &middot; {(file?.pages || 0) * copies} pages</p>
        </div>
      )}

      {stage === "done" && (
        <div className="flex flex-col items-center py-16 fade-in">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: greenLight }}><Check size={32} color={green} /></div>
          <p className="text-lg font-bold" style={{ color: charcoal }}>Sent to Printer!</p>
          <p className="text-xs text-gray-400 mt-1 mb-6">{file?.name} is now printing.</p>
          <div className="rounded-xl p-4 w-full mb-4" style={{ background: "#fafaf8" }}>
            {[{ l: "File", v: file?.name || "" }, { l: "Printer", v: "PrintEase-4F2A" }, { l: "Pages", v: `${(file?.pages || 0) * copies}` }, { l: "Color", v: color ? "Yes" : "No" }, { l: "Double-Sided", v: duplex ? "Yes" : "No" }].map((r) => (
              <div key={r.l} className="flex justify-between py-1.5"><span className="text-[11px] text-gray-400">{r.l}</span><span className="text-[11px] font-semibold" style={{ color: charcoal }}>{r.v}</span></div>
            ))}
          </div>
          <button onClick={onDone} className="w-full rounded-xl py-3 text-white text-sm font-semibold cursor-pointer" style={{ background: blue }}>Done</button>
        </div>
      )}
    </div>
  );
}

// ── Printers Tab ──
function PrintersTab() {
  return (
    <div className="px-4 pt-14">
      <h1 className="text-lg font-bold" style={{ color: charcoal }}>My Printers</h1>
      <p className="text-xs text-gray-400 mb-4">Your connected Print Ease adapters</p>
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: blueLight }}><Printer size={18} color={blue} /></div><div><p className="text-sm font-semibold" style={{ color: charcoal }}>PrintEase-4F2A</p><p className="text-[10px] text-gray-400">HP LaserJet P3015</p></div></div>
          <span className="text-[9px] px-2 py-0.5 rounded-full font-bold" style={{ background: greenLight, color: green }}>Online</span>
        </div>
        <div className="border-t pt-3 grid grid-cols-3 text-center" style={{ borderColor: "#f3f4f6" }}>
          <div><p className="text-base font-bold" style={{ color: charcoal }}>142</p><p className="text-[9px] text-gray-400">Prints</p></div>
          <div><p className="text-base font-bold" style={{ color: charcoal }}>1,276</p><p className="text-[9px] text-gray-400">Pages</p></div>
          <div><p className="text-base font-bold" style={{ color: charcoal }}>Strong</p><p className="text-[9px] text-gray-400">Signal</p></div>
        </div>
      </div>
      <button className="w-full mt-4 rounded-xl py-3 text-sm font-semibold border cursor-pointer flex items-center justify-center gap-2" style={{ borderColor: "#e0e0e0", color: blue }}><Plus size={14} /> Add Another Printer</button>
    </div>
  );
}

// ── Settings Tab ──
function SettingsTab({ userName, userEmail, userCompany, subscribed, onShowRestart }: {
  userName: string; userEmail: string; userCompany: string; subscribed: boolean; onShowRestart: () => void;
}) {
  return (
    <div className="px-4 pt-14">
      <h1 className="text-lg font-bold" style={{ color: charcoal }}>Settings</h1>
      <p className="text-xs text-gray-400 mb-4">Manage your account</p>
      <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
        <div className="flex items-center gap-3 mb-3 pb-3 border-b" style={{ borderColor: "#f3f4f6" }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: blueLight }}><User size={18} color={blue} /></div>
          <div><p className="text-sm font-bold" style={{ color: charcoal }}>{userName || "User"}</p><p className="text-[10px] text-gray-400">{userEmail || "—"}</p></div>
        </div>
        {[...(userCompany ? [{ l: "Company", v: userCompany }] : []), { l: "Member Since", v: "April 2026" }].map((r) => (<div key={r.l} className="flex justify-between py-2 border-b border-gray-50 last:border-0"><span className="text-xs text-gray-400">{r.l}</span><span className="text-xs font-semibold" style={{ color: charcoal }}>{r.v}</span></div>))}
      </div>
      <div className="bg-white rounded-xl p-4 shadow-sm mb-3">
        <div className="flex justify-between items-center"><div><p className="text-xs font-semibold" style={{ color: charcoal }}>Subscription</p><p className="text-[10px] text-gray-400 mt-0.5">{subscribed ? "Analytics Pro - $5/mo" : "Free Plan"}</p></div><span className="text-[9px] px-2 py-0.5 rounded-full font-bold" style={{ background: subscribed ? greenLight : "#f3f4f6", color: subscribed ? green : "#999" }}>{subscribed ? "Active" : "Free"}</span></div>
      </div>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-3">
        {[{ l: "Notifications", d: "Push & email alerts", I: Bell }, { l: "Privacy & Security", d: "Data & permissions", I: Shield }, { l: "Help & Support", d: "FAQs and contact", I: HelpCircle }].map((item) => (
          <button key={item.l} className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-50 last:border-0 cursor-pointer text-left">
            <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#f5f5f5" }}><item.I size={14} color="#777" /></div><div><p className="text-xs font-medium" style={{ color: charcoal }}>{item.l}</p><p className="text-[9px] text-gray-400">{item.d}</p></div></div>
            <ChevronRight size={14} color="#ccc" />
          </button>
        ))}
      </div>
      <button className="w-full bg-white rounded-xl py-3 text-xs font-medium text-red-400 shadow-sm mb-3 cursor-pointer flex items-center justify-center gap-2"><LogOut size={14} /> Sign Out</button>
      <div className="rounded-xl p-4 mb-4" style={{ background: blueLight, border: `1.5px dashed ${blue}30` }}>
        <div className="flex items-center gap-3 mb-2"><div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "white" }}><RotateCcw size={16} color={blue} /></div><div><p className="text-xs font-bold" style={{ color: charcoal }}>Restart Demo</p><p className="text-[9px] text-gray-400">Reset to login and walk through again</p></div></div>
        <button onClick={onShowRestart} className="w-full rounded-xl py-2.5 text-xs font-semibold cursor-pointer text-white" style={{ background: blue }}>Restart from Beginning</button>
      </div>
      <p className="text-[9px] text-gray-400 text-center mb-2">Print Ease v1.0.0</p>
    </div>
  );
}
