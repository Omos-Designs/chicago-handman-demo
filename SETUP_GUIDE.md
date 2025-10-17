# Setup Guide - Chicago Handyman Landing Page

## Quick Start

Your landing page is now running at: **http://localhost:3001**

## What's Included

✅ **Modern Hero Section** - Eye-catching gradient background with animations
✅ **Services Showcase** - 6 service cards with hover effects
✅ **Projects Gallery** - 6 project cards with gradient placeholders
✅ **Contact Form** - Fully functional lead capture form
✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Smooth Animations** - Framer Motion animations throughout
✅ **Phone Number CTA** - Prominently displayed in navbar and hero

## Important: Set Up Google Sheets Integration

To receive form submissions in Google Sheets:

### Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Add these column headers in the first row:
   - **Name**
   - **Email**
   - **Phone**
   - **Service**
   - **Message**
   - **Timestamp**

### Step 2: Connect to Sheet.Best

1. Visit [Sheet.Best](https://sheet.best/)
2. Click "Get Started Free" (no credit card required)
3. Connect your Google Sheet
4. Copy your unique API URL (looks like: `https://sheet.best/api/sheets/xxxxx`)

### Step 3: Update the Environment Variable

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and replace the placeholder with your Sheet.Best API URL:
   ```
   NEXT_PUBLIC_SHEET_BEST_API=https://sheet.best/api/sheets/YOUR_ACTUAL_SHEET_ID
   ```

3. Restart the dev server:
   ```bash
   # Press Ctrl+C to stop
   npm run dev
   ```

4. Test the form - submissions will now go to your Google Sheet!

**Note:** The form currently works in "demo mode" - it will accept submissions and show a success message even without Sheet.Best configured. Once you add your API URL, it will send real data to your Google Sheet.

## Customize Your Business Information

### Update Phone Number

Search for `(312) 555-1234` and replace with your actual phone number in:
- [components/Navbar.tsx](components/Navbar.tsx)
- [components/Hero.tsx](components/Hero.tsx)
- [components/Contact.tsx](components/Contact.tsx)
- [components/Footer.tsx](components/Footer.tsx)

### Update Email Address

Search for `info@chicagohandyman.com` and replace with your email in:
- [components/Contact.tsx](components/Contact.tsx)
- [components/Footer.tsx](components/Footer.tsx)

### Update Business Name

Search for "Chicago Handyman" throughout the codebase and replace with your business name.

## Add Real Project Images

Currently using gradient placeholders. To add real images:

1. Create a `public/images` folder
2. Add your project images
3. Update [components/Projects.tsx](components/Projects.tsx) to use Next.js Image component:

```tsx
import Image from 'next/image';

// Replace the gradient div with:
<Image
  src="/images/project-1.jpg"
  alt="Project name"
  width={400}
  height={300}
  className="w-full h-64 object-cover"
/>
```

## Color Customization

Edit colors in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: {
    // Change these values to your brand colors
  },
}
```

## Deploy to Production

### Option 1: Vercel (Recommended - Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!
5. Your site will be live in minutes

### Option 2: Build Locally

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations
- **Sheet.Best** - Google Sheets integration

## Features Overview

### Navigation Bar
- Sticky navbar with scroll effect
- Mobile-responsive hamburger menu
- Prominent phone number button

### Hero Section
- Animated gradient background
- Floating animation effects
- Clear call-to-action buttons
- Trust badges (Licensed, Same-Day, Quality Guaranteed)

### Services Section
- 6 service cards with icons
- Hover animations
- Gradient icon backgrounds

### Projects Gallery
- 6 project showcases
- Gradient placeholders (replace with real images)
- Location badges
- Hover effects

### Contact Form
- Name, Email, Phone, Service dropdown, Message fields
- Automatic timestamp
- Loading states
- Success/error messages
- Sends to Google Sheets via Sheet.Best

### Footer
- Social media links
- Quick navigation
- Contact information
- Responsive layout

## Testing the Contact Form

1. Fill out the form on your local site
2. Click "Send Message"
3. Check your Google Sheet - the data should appear instantly!

## Need Help?

- Check the [README.md](README.md) for more details
- Review the code comments in each component
- All components are in the `components/` folder

## Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Your landing page is ready to go live!** 🎉

Just update the phone number, email, set up Sheet.Best, and deploy to Vercel.
