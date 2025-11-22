import { useState } from "react";
import CarSelector from "../CarSelector";
import { cars } from "@/data/cars";

export default function CarSelectorExample() {
  const [selectedCar, setSelectedCar] = useState("");

  return (
    <div className="max-w-md">
      <CarSelector
        label="Select Car A"
        value={selectedCar}
        onValueChange={setSelectedCar}
        cars={cars}
      />
    </div>
  );
}
