# Chicago Handyman Landing Page

A modern, professional landing page for a Chicago-based handyman business built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Beautiful gradient backgrounds, smooth animations, and professional aesthetic
- **Responsive**: Fully responsive design that works on all devices
- **Contact Form**: Lead capture form with Google Sheets integration via Sheet.Best
- **Animations**: Smooth scroll animations and interactive elements using Framer Motion
- **Services Showcase**: Display of handyman services with icon cards
- **Projects Gallery**: Portfolio of previous work with gradient placeholders
- **SEO Optimized**: Proper meta tags and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. (Optional) Set up Sheet.Best for Google Sheets integration:

**The form works in demo mode!** To save real data to Google Sheets:
   - Go to https://sheet.best/
   - Create a free account
   - Create a new Google Sheet with columns: `Name`, `Email`, `Phone`, `Service`, `Message`, `Timestamp`
   - Connect your sheet to Sheet.Best and get your API URL
   - Copy `.env.local.example` to `.env.local`
   - Add your API URL to `.env.local`:
   ```
   NEXT_PUBLIC_SHEET_BEST_API=https://sheet.best/api/sheets/YOUR_SHEET_ID
   ```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Business Information

1. **Phone Number**: Search for `(312) 555-1234` and replace with your actual phone number throughout the codebase
2. **Email**: Search for `info@chicagohandyman.com` and replace with your actual email
3. **Business Name**: Update "Chicago Handyman" in the navbar and footer components

### Add Real Images

Replace the gradient placeholders in `components/Projects.tsx` with actual project images:
```typescript
<Image
  src="/images/project-1.jpg"
  alt="Project name"
  width={400}
  height={300}
  className="w-full h-64 object-cover"
/>
```

### Customize Colors

Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Sheet.Best**: Google Sheets API integration

## Lead Collection

All form submissions are automatically sent to your Google Sheet with the following data:
- Name
- Email
- Phone
- Service requested
- Message/Project details
- Timestamp (automatically generated)

### Important: Google Sheet Column Names

Your Google Sheet **MUST** have these exact column names (case-sensitive):
```
Name | Email | Phone | Service | Message | Timestamp
```

See [SHEET_BEST_SETUP.md](SHEET_BEST_SETUP.md) for detailed setup instructions and troubleshooting.

## Support

For issues or questions, please open an issue on GitHub or contact the development team.

## License

MIT License - feel free to use this for your business!
