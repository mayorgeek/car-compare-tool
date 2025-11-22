# Car Comparison Web Tool

A fully functional car comparison tool that allows users to compare two cars side-by-side with automatic spec highlighting and intelligent summary generation.

## Features

✅ **Side-by-Side Comparison** - Compare exactly 2 cars at once  
✅ **Smart Highlighting** - Automatically highlights which car has better specs:
  - Lower price (better value)
  - Higher horsepower (better performance)
  - Newer year (more recent model)
  - Lower mileage (less wear)

✅ **Auto-Generated Summary** - Intelligent text summary explaining which car offers better value  
✅ **Action Buttons** - Buy buttons for each car + customizable chat button  
✅ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop  
✅ **Easy Customization** - Simple configuration files for dealerships

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

The tool will be available at `http://localhost:5000`

## Customization

### For Dealerships

You only need to edit **2 files** to customize this tool for your business:

#### 1. Configure Links (`client/src/config/links.ts`)
```typescript
export const DEALERSHIP_CONFIG = {
  // Your chat link (WhatsApp, Telegram, Messenger, etc.)
  chatLink: "https://wa.me/1234567890",
  
  // Buy link template - {carId} is replaced with actual car ID
  buyLinkTemplate: "https://yourdealership.com/buy?car={carId}",
  
  // Optional: Custom links for specific cars
  customBuyLinks: {
    // 1: "https://special-link-for-car-1.com",
  }
};
```

#### 2. Update Car Inventory (`client/src/data/cars.ts`)

Add, remove, or modify cars in the `cars` array:

```typescript
export const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Camry 2019",
    price: "$18,000",
    priceValue: 18000,        // Numeric value for comparison
    horsepower: 203,
    fuel: "Petrol",
    year: 2019,
    transmission: "Automatic",
    mileage: "45,000 km",
    mileageValue: 45000,      // Numeric value for comparison
    image: camryImage         // Import your image
  },
  // Add more cars...
];
```

### Adding Car Images

**Option 1: Use your own images**
1. Place images in `client/public/cars/`
2. Import: `import carImage from '/cars/your-car.jpg';`

**Option 2: Use image URLs**
```typescript
image: "https://yourwebsite.com/images/car.jpg"
```

**Option 3: Keep stock images**  
The tool includes 8 stock car images for testing.

## How It Works

1. **User selects two cars** from dropdown menus
2. **Tool displays comparison** with all specs side-by-side
3. **Better specs are highlighted** with checkmarks and background color
4. **Summary is auto-generated** explaining which car offers better value
5. **Action buttons** allow users to buy either car or chat with dealership

### What Makes a Spec "Better"?

- ✅ **Price**: Lower is better
- ✅ **Horsepower**: Higher is better  
- ✅ **Year**: Newer is better
- ✅ **Mileage**: Lower is better

## Tech Stack

- **Frontend**: React + TypeScript + TailwindCSS
- **UI Components**: Shadcn UI
- **Backend**: Express.js (minimal)
- **Data**: Mock data (no database required)

## File Structure

```
client/
├── src/
│   ├── config/
│   │   └── links.ts          ← Configure buy/chat links
│   ├── data/
│   │   └── cars.ts           ← Add your car inventory
│   ├── components/
│   │   ├── CarSelector.tsx
│   │   ├── ComparisonCard.tsx
│   │   └── ComparisonSummary.tsx
│   └── pages/
│       └── home.tsx
```

## Documentation

See `CUSTOMIZATION_GUIDE.md` for detailed customization instructions.

## Support

The code is clean, well-commented, and easy to modify. All configuration is centralized in two files for easy dealership customization.

---

**Built with ❤️ for car dealerships**
