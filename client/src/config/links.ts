/**
 * DEALERSHIP CONFIGURATION
 * 
 * Edit these values to customize the links and branding for your dealership.
 * These are the only values you need to change to make the tool work for your business.
 */

export const DEALERSHIP_CONFIG = {
  // BRANDING
  brandName: "Your Dealership Name",
  // Brand logo URL or import path - leave empty to hide logo
  // Example: "https://yourdealership.com/logo.png"
  // Or use an imported image: import logo from '@assets/logo.png'; brandLogo: logo;
  brandLogo: "",
  
  // SOCIAL LINKS - Leave empty string to hide a link
  socialLinks: {
    whatsapp: "https://wa.me/1234567890",
    telegram: "https://t.me/yourusername",
    phone: "tel:+1234567890",
    email: "mailto:hello@yourdealership.com"
  },
  
  // CHAT & PURCHASE LINKS
  // WhatsApp link format: https://wa.me/1234567890
  // Telegram link format: https://t.me/username
  // Messenger link format: https://m.me/username
  // Or any other chat platform link
  chatLink: "https://wa.me/1234567890",
  
  // Default buy link template - use {carId} as placeholder
  // Example: "https://yourdealership.com/buy?car={carId}"
  buyLinkTemplate: "https://example.com/buy/car-{carId}",
  
  // Or set individual buy links per car (optional - leave empty to use template)
  customBuyLinks: {
    // 1: "https://custom-link-for-car-1.com",
    // 2: "https://custom-link-for-car-2.com",
  } as Record<number, string>
};

/**
 * Helper function to get the buy link for a specific car
 */
export function getBuyLink(carId: number): string {
  // Check if there's a custom link for this car
  if (DEALERSHIP_CONFIG.customBuyLinks[carId]) {
    return DEALERSHIP_CONFIG.customBuyLinks[carId];
  }
  
  // Otherwise use the template
  return DEALERSHIP_CONFIG.buyLinkTemplate.replace('{carId}', carId.toString());
}
