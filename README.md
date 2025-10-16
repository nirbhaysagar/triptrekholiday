# Trip Trek Holiday 🏔️

A modern, professional travel and tourism booking website built with React, TypeScript, and Tailwind CSS. Experience the world's most breathtaking destinations with seamless booking and exceptional service.

![Trip Trek Holiday](./src/assets/hero-mountain.jpg)

## 🌟 Features

- **Hero Booking Section** - Quick search for destinations with location, dates, and guest count
- **Major Destinations Carousel** - Interactive carousel showcasing 150+ destinations worldwide
- **Tour Packages** - Curated tour packages with detailed information and pricing
- **About Section** - Company credentials with impressive statistics
- **Transport Services** - Comprehensive transportation options (Plane, Train, Bus, Local)
- **Responsive Design** - Mobile-first approach with seamless navigation
- **Professional UI/UX** - Clean, modern interface with smooth animations

## 🚀 Tech Stack

### Core Technologies
- **React 18.3.1** - Modern React with hooks
- **TypeScript 5.8.3** - Type-safe development
- **Vite 5.4.19** - Lightning-fast build tool
- **React Router 6.30.1** - Client-side routing

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Lucide React** - Beautiful, consistent icons
- **Embla Carousel** - Smooth, performant carousels

### State & Data Management
- **TanStack Query (React Query)** - Powerful data synchronization
- **React Hook Form** - Performant form management
- **Zod** - Schema validation

### Additional Tools
- **date-fns** - Modern date utility library
- **class-variance-authority** - CSS variant management
- **tailwind-merge** - Intelligent Tailwind class merging

## 📁 Project Structure

```
trek-trip-dreams-main/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/              # Images and static files
│   │   ├── destination-*.jpg
│   │   ├── hero-mountain.jpg
│   │   └── journey-road.jpg
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── About.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── MajorDestinations.tsx
│   │   ├── Navigation.tsx
│   │   ├── TourPackages.tsx
│   │   └── TransportServices.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design System

### Color Palette
- **Primary:** Teal/Turquoise (`hsl(173 80% 40%)`) - Main brand color
- **Accent:** Dark Teal (`hsl(173 58% 39%)`) - Footer and highlights
- **Earth Warm:** Orange (`hsl(25 75% 47%)`) - Ratings and accents
- **Ocean Deep:** Deep Blue (`hsl(200 95% 35%)`) - Transport icons
- **Background:** White with subtle gray for secondary sections

### Typography
- **Headings:** Playfair Display (Serif) - Elegant, professional
- **Body:** Inter (Sans-serif) - Clean, readable

### Shadows
- **Soft:** Subtle elevation
- **Medium:** Card hover states
- **Large:** Prominent elements

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   cd trek-trip-dreams-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Index | Main landing page with all sections |
| `*` | NotFound | 404 error page |

## 🧩 Key Components

### Hero
Hero section with mountain background and booking card featuring:
- Location input
- Check-in/out dates
- Guest count
- Search functionality

### MajorDestinations
Interactive carousel showcasing destinations:
- 6 featured destinations
- Star ratings
- Pricing information
- Smooth navigation controls

### TourPackages
Tour package cards with:
- Package details (duration, features)
- Professional guide information
- Accommodation details
- Booking buttons

### About
Company showcase featuring:
- 4 key value propositions (Global Reach, Expert Team, Award Winning, Passionate Service)
- Statistics (150+ Destinations, 10K+ Happy Travelers, 100+ Tour Guides, 15+ Years)

### TransportServices
Transportation options with:
- Plane, Train, Bus, Local transportation
- Detailed service descriptions
- Scenic journey imagery

### Footer
Comprehensive footer with:
- Company information
- Quick links (About, Support)
- Contact details (email, phone, address)

## 🎯 Features Breakdown

### Responsive Navigation
- Fixed header with smooth scroll
- Mobile hamburger menu
- Smooth section anchoring

### Interactive Elements
- Hover effects on cards
- Image zoom on hover
- Smooth transitions
- Loading states

### Booking Flow
- Quick booking form in hero
- Tour package booking buttons
- Contact form in footer

## 🔧 Configuration Files

### Vite Config (`vite.config.ts`)
- React SWC plugin for fast refresh
- Path aliases (`@` → `./src`)
- Development server on port 8080
- Component tagging for development

### Tailwind Config (`tailwind.config.ts`)
- Custom color system
- Extended font families
- Custom shadows and transitions
- Dark mode support (class-based)

### TypeScript Config
- Strict type checking
- Modern ES features
- Path resolution

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` folder, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Environment Variables
Currently, no environment variables are required. For future API integrations, create a `.env` file:
```env
VITE_API_URL=your_api_url
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Adding New Destinations
Edit `src/components/MajorDestinations.tsx`:
```typescript
const destinations = [
  {
    id: 7,
    image: yourImage,
    name: "Your Destination",
    price: "$XXX.XX",
    rating: 5.0,
  },
  // ...
];
```

### Changing Colors
Edit `src/index.css` to modify CSS variables:
```css
:root {
  --primary: 173 80% 40%; /* Your HSL color */
  --accent: 173 58% 39%;
  /* ... */
}
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`:
```typescript
<Route path="/your-path" element={<YourComponent />} />
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Contact

**Trip Trek Holiday**
- Email: info@triptrekholiday.com
- Phone: +1 (555) 123-4567
- Address: 123 Travel Street, Adventure City

## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful component library
- **Lucide** - For the comprehensive icon set
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For the utility-first CSS framework

## 📈 Stats & Highlights

- ✅ 150+ Destinations worldwide
- ✅ 10,000+ Happy travelers
- ✅ 100+ Professional tour guides
- ✅ 15+ Years of experience
- ✅ 135+ Event collaborations
- ✅ 5.0⭐ Average rating

---

**Built with ❤️ for adventurers around the world**
