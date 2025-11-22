import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { type Car } from "@/data/cars";

interface ComparisonCardProps {
  car: Car;
  highlights: {
    price?: boolean;
    horsepower?: boolean;
    year?: boolean;
    mileage?: boolean;
  };
  onBuyClick: () => void;
}

export default function ComparisonCard({ car, highlights, onBuyClick }: ComparisonCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img 
          src={car.image} 
          alt={car.name}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-2" data-testid={`text-car-name-${car.id}`}>
            {car.name}
          </h3>
        </div>

        <div className="space-y-0 divide-y divide-border">
          <SpecRow 
            label="Price" 
            value={car.price} 
            highlighted={highlights.price}
            testId={`text-price-${car.id}`}
          />
          <SpecRow 
            label="Horsepower" 
            value={`${car.horsepower} hp`} 
            highlighted={highlights.horsepower}
            testId={`text-horsepower-${car.id}`}
          />
          <SpecRow 
            label="Year" 
            value={car.year.toString()} 
            highlighted={highlights.year}
            testId={`text-year-${car.id}`}
          />
          <SpecRow 
            label="Mileage" 
            value={car.mileage} 
            highlighted={highlights.mileage}
            testId={`text-mileage-${car.id}`}
          />
          <SpecRow 
            label="Fuel Type" 
            value={car.fuel}
            testId={`text-fuel-${car.id}`}
          />
          <SpecRow 
            label="Transmission" 
            value={car.transmission}
            testId={`text-transmission-${car.id}`}
          />
        </div>

        <Button 
          className="w-full" 
          size="lg"
          onClick={onBuyClick}
          data-testid={`button-buy-${car.id}`}
        >
          Buy This Car
        </Button>
      </div>
    </Card>
  );
}

interface SpecRowProps {
  label: string;
  value: string;
  highlighted?: boolean;
  testId?: string;
}

function SpecRow({ label, value, highlighted, testId }: SpecRowProps) {
  return (
    <div className={`grid grid-cols-2 items-center py-3 ${highlighted ? 'bg-primary/5' : ''}`}>
      <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
        {label}
      </span>
      <div className="flex items-center justify-end gap-2">
        <span className={`text-lg font-semibold text-right ${highlighted ? 'font-bold' : ''}`} data-testid={testId}>
          {value}
        </span>
        {highlighted && (
          <Check className="w-5 h-5 text-primary" data-testid={`icon-check-${testId}`} />
        )}
      </div>
    </div>
  );
}
