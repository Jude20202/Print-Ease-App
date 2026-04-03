import { CheckCircle2 } from "lucide-react";

export default function ChecklistItem({
  text,
  color = "text-brand-blue",
}: {
  text: string;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className={`w-5 h-5 shrink-0 ${color}`} />
      <span className="text-sm text-brand-charcoal">{text}</span>
    </div>
  );
}
