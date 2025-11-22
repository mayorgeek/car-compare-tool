import { Car } from "lucide-react";
import { DEALERSHIP_CONFIG } from "@/config/links";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          {DEALERSHIP_CONFIG.brandLogo && (
            <img 
              src={DEALERSHIP_CONFIG.brandLogo} 
              alt={DEALERSHIP_CONFIG.brandName}
              className="h-10 w-auto rounded-lg"
              data-testid="img-brand-logo"
            />
          )}
          <div className="flex items-center gap-2">
            <Car className="w-8 h-8" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold" data-testid="text-brand-name">
                {DEALERSHIP_CONFIG.brandName}
              </h1>
              <p className="text-xs md:text-sm text-blue-100">Find Your Perfect Car</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
