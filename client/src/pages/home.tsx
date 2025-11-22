import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, TrendingDown, Calendar, Gauge } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarSelector from "@/components/CarSelector";
import ComparisonCard from "@/components/ComparisonCard";
import ComparisonSummary from "@/components/ComparisonSummary";
import SocialLinks from "@/components/SocialLinks";
import { cars, getCarWithBuyLink } from "@/data/cars";
import { DEALERSHIP_CONFIG } from "@/config/links";

export default function Home() {
  const [carAId, setCarAId] = useState("");
  const [carBId, setCarBId] = useState("");

  const carA = useMemo(() => cars.find(c => c.id.toString() === carAId), [carAId]);
  const carB = useMemo(() => cars.find(c => c.id.toString() === carBId), [carBId]);

  const highlights = useMemo(() => {
    if (!carA || !carB) return { carA: {}, carB: {} };

    return {
      carA: {
        horsepower: carA.horsepower > carB.horsepower,
        year: carA.year > carB.year,
        mileage: carA.mileageValue < carB.mileageValue,
        price: carA.priceValue < carB.priceValue
      },
      carB: {
        horsepower: carB.horsepower > carA.horsepower,
        year: carB.year > carA.year,
        mileage: carB.mileageValue < carA.mileageValue,
        price: carB.priceValue < carA.priceValue
      }
    };
  }, [carA, carB]);

  const summary = useMemo(() => {
    if (!carA || !carB) return "";

    const advantages: string[] = [];
    const getShortName = (name: string) => {
      const parts = name.split(' ');
      return parts.length >= 2 ? `${parts[0]} ${parts[1]}` : name;
    };
    const carAName = getShortName(carA.name);
    const carBName = getShortName(carB.name);

    if (highlights.carA.horsepower) {
      advantages.push(`The ${carAName} offers better horsepower (${carA.horsepower} hp vs ${carB.horsepower} hp)`);
    } else if (highlights.carB.horsepower) {
      advantages.push(`The ${carBName} offers better horsepower (${carB.horsepower} hp vs ${carA.horsepower} hp)`);
    }

    if (highlights.carA.mileage) {
      advantages.push(`lower mileage (${carA.mileage} vs ${carB.mileage})`);
    } else if (highlights.carB.mileage) {
      advantages.push(`lower mileage (${carB.mileage} vs ${carA.mileage})`);
    }

    if (highlights.carA.year) {
      advantages.push(`and is newer (${carA.year} vs ${carB.year})`);
    } else if (highlights.carB.year) {
      advantages.push(`and is newer (${carB.year} vs ${carA.year})`);
    }

    let summaryText = advantages.slice(0, 2).join(', ') + (advantages.length > 2 ? ', ' + advantages[2] : '') + '. ';

    if (highlights.carA.price) {
      summaryText += `The ${carAName} is also more affordable at ${carA.price} compared to ${carB.price}. `;
    } else if (highlights.carB.price) {
      summaryText += `However, the ${carBName} is more affordable at ${carB.price} compared to ${carA.price}. `;
    }

    const carAScore = Object.values(highlights.carA).filter(Boolean).length;
    const carBScore = Object.values(highlights.carB).filter(Boolean).length;

    if (carAScore > carBScore) {
      summaryText += `Overall, the ${carAName} offers better value with ${carAScore} out of 4 key advantages.`;
    } else if (carBScore > carAScore) {
      summaryText += `Overall, the ${carBName} offers better value with ${carBScore} out of 4 key advantages.`;
    } else {
      summaryText += `Both vehicles are evenly matched with ${carAScore} advantages each. Your choice depends on personal preference.`;
    }

    return summaryText;
  }, [carA, carB, highlights]);

  const handleBuyCarA = () => {
    if (carA) {
      const carWithLink = getCarWithBuyLink(carA);
      console.log('Buy Car A clicked:', carWithLink.buyLink);
      window.open(carWithLink.buyLink, '_blank');
    }
  };

  const handleBuyCarB = () => {
    if (carB) {
      const carWithLink = getCarWithBuyLink(carB);
      console.log('Buy Car B clicked:', carWithLink.buyLink);
      window.open(carWithLink.buyLink, '_blank');
    }
  };

  const handleChatClick = () => {
    console.log('Chat clicked:', DEALERSHIP_CONFIG.chatLink);
    window.open(DEALERSHIP_CONFIG.chatLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <section className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Compare Cars Side-by-Side
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Make informed decisions with detailed specifications and automatic highlights
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-card border border-border rounded-lg p-4">
                <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">Instant Comparison</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <TrendingDown className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">Price Analysis</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <Calendar className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">Year & Mileage</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <Gauge className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">Performance</p>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <CarSelector
            label="Select Car A"
            value={carAId}
            onValueChange={setCarAId}
            cars={cars}
          />
          <CarSelector
            label="Select Car B"
            value={carBId}
            onValueChange={setCarBId}
            cars={cars}
          />
        </div>

        {carA && carB && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <ComparisonCard
                car={carA}
                highlights={highlights.carA}
                onBuyClick={handleBuyCarA}
              />
              <ComparisonCard
                car={carB}
                highlights={highlights.carB}
                onBuyClick={handleBuyCarB}
              />
            </div>

            <div className="mb-8 md:mb-12">
              <ComparisonSummary summary={summary} />
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="w-full md:w-auto px-8"
                onClick={handleBuyCarA}
                data-testid="button-buy-car-a"
              >
                Buy {(() => {
                  const parts = carA.name.split(' ');
                  return parts.length >= 2 ? `${parts[0]} ${parts[1]}` : carA.name;
                })()}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full md:w-auto px-8 gap-2"
                onClick={handleChatClick}
                data-testid="button-chat"
              >
                <MessageCircle className="w-5 h-5" />
                Chat With Us
              </Button>
              <Button 
                size="lg" 
                className="w-full md:w-auto px-8"
                onClick={handleBuyCarB}
                data-testid="button-buy-car-b"
              >
                Buy {(() => {
                  const parts = carB.name.split(' ');
                  return parts.length >= 2 ? `${parts[0]} ${parts[1]}` : carB.name;
                })()}
              </Button>
            </div>
          </>
        )}

          {(!carA || !carB) && (
            <div className="text-center py-16 bg-gradient-to-b from-blue-50 to-background dark:from-slate-900/50 dark:to-background rounded-lg border border-border">
              <Gauge className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-lg text-muted-foreground">
                Select two cars above to start comparing
              </p>
            </div>
          )}

          <SocialLinks />
        </div>
      </main>

      <Footer />
    </div>
  );
}
