import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { type Car } from "@/data/cars";

interface CarSelectorProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  cars: Car[];
  placeholder?: string;
}

export default function CarSelector({ label, value, onValueChange, cars, placeholder = "Choose a car..." }: CarSelectorProps) {
  return (
    <div className="space-y-3">
      <Label htmlFor={label.toLowerCase().replace(/\s+/g, '-')} className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger 
          id={label.toLowerCase().replace(/\s+/g, '-')}
          className="h-12 text-base"
          data-testid={`select-${label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {cars.map((car) => (
            <SelectItem key={car.id} value={car.id.toString()}>
              {car.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
