import { Heart, Globe } from "lucide-react";
import { DEALERSHIP_CONFIG } from "@/config/links";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-gray-300 mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-bold text-white">{DEALERSHIP_CONFIG.brandName}</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted platform for finding and comparing the perfect vehicle. We make car shopping simple, transparent, and enjoyable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#compare" className="text-gray-400 hover:text-primary transition-colors">
                  Side-by-Side Comparison
                </a>
              </li>
              <li>
                <a href="#specs" className="text-gray-400 hover:text-primary transition-colors">
                  Detailed Specs
                </a>
              </li>
              <li>
                <a href="#summary" className="text-gray-400 hover:text-primary transition-colors">
                  Smart Summaries
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              {DEALERSHIP_CONFIG.socialLinks.whatsapp && (
                <li>
                  <a 
                    href={DEALERSHIP_CONFIG.socialLinks.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {DEALERSHIP_CONFIG.socialLinks.telegram && (
                <li>
                  <a 
                    href={DEALERSHIP_CONFIG.socialLinks.telegram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Telegram
                  </a>
                </li>
              )}
              {DEALERSHIP_CONFIG.socialLinks.phone && (
                <li>
                  <a 
                    href={DEALERSHIP_CONFIG.socialLinks.phone}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Phone
                  </a>
                </li>
              )}
              {DEALERSHIP_CONFIG.socialLinks.email && (
                <li>
                  <a 
                    href={DEALERSHIP_CONFIG.socialLinks.email}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Email
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              Copyright {currentYear} {DEALERSHIP_CONFIG.brandName}. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              Made with <Heart className="w-4 h-4 text-red-500" /> by automotive enthusiasts
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
