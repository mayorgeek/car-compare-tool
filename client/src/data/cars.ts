import camryImage from '@assets/stock_images/modern_silver_sedan__a7766d8a.jpg';
import accordImage from '@assets/stock_images/modern_silver_sedan__4ba3c29d.jpg';
import altimaxImage from '@assets/stock_images/modern_silver_sedan__34946841.jpg';
import civic2020Image from '@assets/stock_images/modern_silver_sedan__022085d9.jpg';
import mazda6Image from '@assets/stock_images/modern_silver_sedan__4cefff9a.jpg';
import k5Image from '@assets/stock_images/modern_silver_sedan__b188bdac.jpg';
import sonataImage from '@assets/stock_images/modern_silver_sedan__2ed61f27.jpg';
import legacyImage from '@assets/stock_images/modern_silver_sedan__766826b1.jpg';
import { getBuyLink } from '@/config/links';

/**
 * CAR DATA CONFIGURATION
 * 
 * Add or modify cars in this array to customize your inventory.
 * Each car needs: id, name, price, horsepower, fuel, year, transmission, mileage, and image.
 */

export interface Car {
  id: number;
  name: string;
  price: string;
  priceValue: number;
  horsepower: number;
  fuel: string;
  year: number;
  transmission: string;
  mileage: string;
  mileageValue: number;
  image: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Camry 2019",
    price: "$18,000",
    priceValue: 18000,
    horsepower: 203,
    fuel: "Petrol",
    year: 2019,
    transmission: "Automatic",
    mileage: "45,000 km",
    mileageValue: 45000,
    image: camryImage
  },
  {
    id: 2,
    name: "Honda Accord 2019",
    price: "$19,500",
    priceValue: 19500,
    horsepower: 192,
    fuel: "Petrol",
    year: 2019,
    transmission: "Automatic",
    mileage: "50,000 km",
    mileageValue: 50000,
    image: accordImage
  },
  {
    id: 3,
    name: "Nissan Altima 2020",
    price: "$20,200",
    priceValue: 20200,
    horsepower: 188,
    fuel: "Petrol",
    year: 2020,
    transmission: "CVT",
    mileage: "38,000 km",
    mileageValue: 38000,
    image: altimaxImage
  },
  {
    id: 4,
    name: "Honda Civic 2020",
    price: "$17,800",
    priceValue: 17800,
    horsepower: 174,
    fuel: "Petrol",
    year: 2020,
    transmission: "CVT",
    mileage: "42,000 km",
    mileageValue: 42000,
    image: civic2020Image
  },
  {
    id: 5,
    name: "Mazda6 2019",
    price: "$19,000",
    priceValue: 19000,
    horsepower: 187,
    fuel: "Petrol",
    year: 2019,
    transmission: "Automatic",
    mileage: "48,000 km",
    mileageValue: 48000,
    image: mazda6Image
  },
  {
    id: 6,
    name: "Kia K5 2021",
    price: "$21,500",
    priceValue: 21500,
    horsepower: 180,
    fuel: "Petrol",
    year: 2021,
    transmission: "Automatic",
    mileage: "28,000 km",
    mileageValue: 28000,
    image: k5Image
  },
  {
    id: 7,
    name: "Hyundai Sonata 2020",
    price: "$18,900",
    priceValue: 18900,
    horsepower: 191,
    fuel: "Petrol",
    year: 2020,
    transmission: "Automatic",
    mileage: "40,000 km",
    mileageValue: 40000,
    image: sonataImage
  },
  {
    id: 8,
    name: "Subaru Legacy 2019",
    price: "$19,300",
    priceValue: 19300,
    horsepower: 182,
    fuel: "Petrol",
    year: 2019,
    transmission: "CVT",
    mileage: "46,000 km",
    mileageValue: 46000,
    image: legacyImage
  }
];

// Helper function to get car with buy link
export function getCarWithBuyLink(car: Car) {
  return {
    ...car,
    buyLink: getBuyLink(car.id)
  };
}
