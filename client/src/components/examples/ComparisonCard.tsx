import ComparisonCard from "../ComparisonCard";
import { cars } from "@/data/cars";

export default function ComparisonCardExample() {
  const car = cars[0];

  return (
    <div className="max-w-md">
      <ComparisonCard
        car={car}
        highlights={{
          horsepower: true,
          year: false,
          mileage: true,
          price: false
        }}
        onBuyClick={() => console.log(`Buy ${car.name} clicked`)}
      />
    </div>
  );
}
