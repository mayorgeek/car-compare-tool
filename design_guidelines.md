# Car Comparison Tool - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern automotive marketplaces (CarGuru, Carvana) and comparison tools, emphasizing clean data presentation with dealership credibility.

**Core Principles**:
- Data clarity over decorative elements
- Professional automotive aesthetic
- Quick visual comparison scanning
- Trust-building through polished presentation

## Typography System

**Font Stack**: 
- Primary: Inter or Work Sans (Google Fonts) - clean, professional
- Headings: 600-700 weight
- Body: 400-500 weight
- Data/specs: 500 weight (medium emphasis)

**Hierarchy**:
- Page title: text-3xl md:text-4xl font-bold
- Car names: text-2xl md:text-3xl font-semibold
- Section headers: text-lg font-semibold uppercase tracking-wide
- Spec labels: text-sm font-medium uppercase tracking-wider
- Spec values: text-lg md:text-xl font-semibold
- Summary text: text-base md:text-lg leading-relaxed
- Buttons: text-base font-semibold

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16
- Consistent padding: p-6 for cards, p-4 for smaller components
- Section spacing: mb-8 md:mb-12 between major sections
- Component gaps: gap-6 md:gap-8 for comparison columns

**Container Structure**:
- Max width: max-w-7xl mx-auto
- Outer padding: px-4 md:px-6 lg:px-8
- Comparison area: Two-column grid (grid-cols-1 md:grid-cols-2 gap-6 md:gap-8)

## Page Layout

**Header Section**:
- Full-width container with centered content
- Tool title and brief tagline (e.g., "Compare Cars Side-by-Side")
- Minimal header, focus on tool functionality below
- Spacing: py-8 md:py-12

**Selector Section**:
- Two-column grid on desktop, stacked on mobile
- Each selector in its own card/container
- Clear labels: "Select Car A" and "Select Car B"
- Dropdowns: Full-width, h-12, rounded-lg borders
- Spacing between selectors and comparison: mb-8 md:mb-12

**Comparison Section**:
- Side-by-side cards on desktop (grid-cols-2)
- Stacked cards on mobile (grid-cols-1)
- Equal height cards with consistent internal structure
- Sticky positioning for spec labels on scroll (optional enhancement)

**Action Buttons Section**:
- Centered below comparison
- Three-button layout: "Buy Car A" | "Chat With Us" | "Buy Car B"
- Flex layout: flex flex-col md:flex-row gap-4 justify-center
- Each button: px-8 py-3 rounded-lg

## Component Library

**Car Selection Dropdowns**:
- Custom-styled select elements with arrow indicators
- Hover state with subtle elevation
- Focus state with prominent border treatment
- Placeholder text: "Choose a car..."

**Comparison Cards**:
- Elevated card design with rounded corners (rounded-xl)
- Internal structure:
  - Car image container: aspect-video, object-cover, rounded-t-xl
  - Car name: p-6, text-2xl font-semibold
  - Price badge: Prominent display, large text
  - Specs grid: Structured rows with label-value pairs
  - Button area: p-6, pt-0

**Spec Row Structure**:
- Grid layout: grid grid-cols-2 items-center py-3 border-b
- Label (left): text-sm uppercase tracking-wide
- Value (right): text-lg font-semibold text-right
- Highlighted rows (better spec): Distinct background treatment, font-weight: 700

**Highlight System**:
- Visual indicator for better specs: Bold typography + subtle background
- Use checkmark or trophy icon (Heroicons) for winning specs
- Consistent highlighting across both cards (e.g., horsepower winner highlighted in Car A card)

**Summary Box**:
- Full-width container below comparison cards
- Rounded container with padding: p-6 md:p-8, rounded-xl
- Summary icon (info or comparison icon from Heroicons)
- Text: leading-relaxed, max-w-3xl mx-auto
- Spacing: my-8 md:my-12

**Action Buttons**:
- Primary style for "Buy" buttons: px-8 py-3 rounded-lg font-semibold
- Secondary/outline style for "Chat With Us": border-2
- Hover states: Slight elevation transform, transition-all duration-200
- Mobile: Full-width buttons, stacked vertically
- Desktop: Auto-width buttons, horizontal layout

## Images

**Car Images**:
- Aspect ratio: 16:9 (aspect-video)
- Position: Top of each comparison card
- Treatment: rounded-t-xl, object-cover, w-full
- Fallback: Placeholder with car icon if image missing
- No hero image required for this utility tool - focus on comparison functionality

**Icons**:
- Icon library: Heroicons (via CDN)
- Usage: Checkmarks for better specs, info icon for summary, chat icon for messaging button
- Size: w-5 h-5 or w-6 h-6 depending on context

## Responsive Behavior

**Mobile (< 768px)**:
- Single column comparison (stacked cards)
- Full-width selectors and buttons
- Reduced padding: p-4 instead of p-6
- Smaller typography scale

**Tablet (768px - 1024px)**:
- Two-column comparison begins
- Moderate spacing
- Standard button widths

**Desktop (1024px+)**:
- Full two-column comparison with generous spacing
- Max container width applied
- Optimal reading width for summary

## Interaction Details

- No hover animations on comparison cards (keep focus on data)
- Smooth transitions on button hovers (duration-200)
- Dropdown menus with subtle hover states
- No auto-play or distracting animations
- Focus states clearly visible for keyboard navigation

## Accessibility

- Semantic HTML structure (headings, labels, buttons)
- ARIA labels for selectors ("Select first car for comparison")
- Sufficient contrast for highlighted specs
- Focus indicators on all interactive elements
- Responsive text sizes (no text smaller than 14px/text-sm on mobile)