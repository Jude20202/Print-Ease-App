import Card from "@/components/ui/Card";
import { Printer, FileText, Wifi, DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { KpiData } from "@/lib/types";

const iconMap: Record<string, React.ElementType> = {
  printer: Printer,
  "file-text": FileText,
  wifi: Wifi,
  "dollar-sign": DollarSign,
};

export default function KpiCards({ data }: { data: KpiData[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((kpi) => {
        const Icon = iconMap[kpi.icon] || Printer;
        return (
          <Card key={kpi.label} className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-blue" />
              </div>
              {kpi.change && (
                <span
                  className={`flex items-center gap-1 text-xs font-medium ${
                    kpi.changeType === "up" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {kpi.changeType === "up" ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {kpi.change}
                </span>
              )}
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-charcoal">{kpi.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{kpi.label}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
