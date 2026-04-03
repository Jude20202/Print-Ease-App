import Card from "@/components/ui/Card";
import { recentActivity } from "@/lib/mock-data";
import { UserPlus, Wifi, CreditCard, Printer } from "lucide-react";

const typeIcons = {
  signup: UserPlus,
  setup: Wifi,
  subscription: CreditCard,
  print: Printer,
};

const typeColors = {
  signup: "bg-green-100 text-green-600",
  setup: "bg-blue-100 text-blue-600",
  subscription: "bg-orange-100 text-brand-orange",
  print: "bg-gray-100 text-gray-600",
};

export default function RecentActivity() {
  return (
    <Card>
      <h3 className="text-sm font-semibold text-brand-charcoal mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {recentActivity.map((item) => {
          const Icon = typeIcons[item.type];
          const color = typeColors[item.type];
          return (
            <div key={item.id} className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-brand-charcoal">{item.message}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {new Date(item.timestamp).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
