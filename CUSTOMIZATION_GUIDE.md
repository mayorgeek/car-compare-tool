# Car Comparison Tool - Customization Guide

This guide will help you customize the Car Comparison Tool for your dealership.

## Quick Start

The tool is designed to be easy to customize. You only need to edit **2 files** to make it work for your business:

### 1. Configure Links & Branding (`client/src/config/links.ts`)

This file controls your dealership branding, chat button, and purchase links.

```typescript
export const DEALERSHIP_CONFIG = {
  // BRANDING
  brandName: "Your Dealership Name",
  // Brand logo URL or import path - leave empty to hide logo
  // Example: "https://yourdealership.com/logo.png"
  brandLogo: "",
  
  // SOCIAL LINKS - Leave empty string to hide a link
  socialLinks: {
    whatsapp: "https://wa.me/1234567890",
    telegram: "https://t.me/yourusername",
    phone: "tel:+1234567890",
    email: "mailto:hello@yourdealership.com"
  },
  
  // CHAT & PURCHASE LINKS
  // Your chat platform link (WhatsApp, Telegram, Messenger, etc.)
  chatLink: "https://wa.me/1234567890",
  
  // Template for buy links - {carId} will be replaced with the car ID
  buyLinkTemplate: "https://yourdealership.com/buy?car={carId}",
  
  // Optional: Set custom links for specific cars
  customBuyLinks: {
    // 1: "https://custom-link-for-toyota-camry.com",
  }
};
```

**Setting Your Brand Name & Logo**  
Simply update `brandName` to your dealership name - it will appear at the top of the page.

Set `brandLogo` to:
- A URL: `"https://yourdealership.com/logo.png"`
- Or an imported image (put your logo in `client/public/logo.png` and update the import)

Leave `brandLogo` empty (`""`) to hide the logo and show only your brand name.

**Setting Up Social Links**  
Add your contact channels in the `socialLinks` section. The page will automatically display buttons for each link you provide:
- **WhatsApp**: `https://wa.me/PHONENUMBER` (replace PHONENUMBER with your number)
- **Telegram**: `https://t.me/yourusername` (replace with your username)
- **Phone**: `tel:+1234567890` (replace with your phone number)
- **Email**: `mailto:hello@yourdealership.com` (replace with your email)

Leave any link empty (`""`) to hide that button from the page. All links appear in a "Get In Touch" section that's always visible to customers.

**Common Chat Platform Formats:**
- WhatsApp: `https://wa.me/1234567890`
- Telegram: `https://t.me/username`
- Facebook Messenger: `https://m.me/username`
- Any custom link you prefer

### 2. Add Your Cars (`client/src/data/cars.ts`)

This file contains your car inventory. Add, remove, or modify cars as needed.

```typescript
export const cars: Car[] = [
  {
    id: 1,                              // Unique ID for each car
    name: "Toyota Camry 2019",          // Display name
    price: "$18,000",                   // Display price
    priceValue: 18000,                  // Numeric price for comparison
    horsepower: 203,                    // Engine power
    fuel: "Petrol",                     // Fuel type
    year: 2019,                         // Year
    transmission: "Automatic",          // Transmission type
    mileage: "45,000 km",              // Display mileage
    mileageValue: 45000,               // Numeric mileage for comparison
    image: camryImage                   // Image (see below)
  },
  // Add more cars...
];
```

## Adding Car Images

### Option 1: Use Your Own Images

1. Place your car images in `client/public/cars/` folder
2. Import them at the top of `client/src/data/cars.ts`:

```typescript
import camryImage from '/cars/toyota-camry-2019.jpg';
```

### Option 2: Use URLs

You can use image URLs directly:

```typescript
{
  id: 1,
  name: "Toyota Camry 2019",
  // ... other fields
  image: "https://yourwebsite.com/images/camry.jpg"
}
```

### Option 3: Keep Stock Images

The tool comes with 8 stock car images. You can use them as-is for testing.

## How the Comparison Works

The tool automatically highlights which car has better specs:

- ✅ **More Horsepower** = Better performance
- ✅ **Newer Year** = More recent model
- ✅ **Lower Mileage** = Less wear and tear
- ✅ **Lower Price** = Better value

The summary text is auto-generated based on these comparisons.

## Customization Tips

### Changing Colors

The tool uses a professional blue color scheme. To change it:

1. Open `client/src/index.css`
2. Find the `--primary` variable in both `:root` and `.dark` sections
3. Change the HSL values to your brand color

Example - Change to red:
```css
--primary: 0 84% 60%;  /* Red instead of blue */
```

### Adding More Specifications

To add new specs like "Engine Size" or "Safety Rating":

1. Update the `Car` interface in `client/src/data/cars.ts`
2. Add the spec to each car in the array
3. Add a new `<SpecRow>` in `client/src/components/ComparisonCard.tsx`

### Removing the Chat Button

If you don't need the chat feature, edit `client/src/pages/home.tsx` and remove this section:

```typescript
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
```

## Testing Your Changes

After making changes:

1. The tool will automatically reload in your browser
2. Select two cars and verify:
   - Car images display correctly
   - Specs are accurate
   - Buy buttons open the correct links
   - Chat button works

## File Structure

```
client/
├── src/
│   ├── config/
│   │   └── links.ts          ← Edit: Configure buy/chat links
│   ├── data/
│   │   └── cars.ts           ← Edit: Add your car inventory
│   ├── components/
│   │   ├── CarSelector.tsx   ← Dropdown menus
│   │   ├── ComparisonCard.tsx ← Car display cards
│   │   └── ComparisonSummary.tsx ← Summary text
│   └── pages/
│       └── home.tsx          ← Main comparison page
```

## Common Issues

### Images Not Showing
- Check the file path is correct
- Ensure images are in `client/public/` or properly imported
- Verify image format (JPG, PNG, WebP supported)

### Buy Links Not Working
- Check `buyLinkTemplate` in `client/src/config/links.ts`
- Ensure `{carId}` placeholder is present if using template
- Test in browser console (links are logged when clicked)

### Chat Link Not Opening
- Verify the link format matches your platform
- Test the link directly in your browser first
- Make sure it starts with `https://`

## Need Help?

The code is clean, simple, and well-commented. If you get stuck:

1. Check the comments in the configuration files
2. Look at the existing car examples for reference
3. All changes take effect immediately (auto-reload)

---

**Remember:** You only need to edit 2 files to make this tool work:
1. `client/src/config/links.ts` - for button links
2. `client/src/data/cars.ts` - for your car inventory

Everything else works automatically!
