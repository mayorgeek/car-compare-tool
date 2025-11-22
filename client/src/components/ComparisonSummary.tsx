import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

interface ComparisonSummaryProps {
  summary: string;
}

export default function ComparisonSummary({ summary }: ComparisonSummaryProps) {
  return (
    <Card className="p-6 md:p-8">
      <div className="flex gap-4 items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Info className="w-5 h-5 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Comparison Summary</h3>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground" data-testid="text-comparison-summary">
            {summary}
          </p>
        </div>
      </div>
    </Card>
  );
}
