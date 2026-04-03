import Card from "@/components/ui/Card";
import ChecklistItem from "@/components/ui/ChecklistItem";
import { analyticsFeatures } from "@/lib/mock-data";

export default function WhatsIncluded() {
  return (
    <Card>
      <h3 className="text-sm font-semibold text-brand-charcoal mb-4">
        What&apos;s Included
      </h3>
      <p className="text-xs text-gray-500 mb-4">
        Your Print Ease Analytics subscription includes comprehensive monitoring
        and reporting tools to optimize your print workflow.
      </p>
      <div className="flex flex-col gap-3">
        {analyticsFeatures.map((feature) => (
          <ChecklistItem key={feature} text={feature} />
        ))}
      </div>
    </Card>
  );
}
