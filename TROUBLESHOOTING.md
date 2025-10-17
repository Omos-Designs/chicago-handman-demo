# Troubleshooting Guide

## Contact Form Issues

### Form Shows Success But Data Doesn't Appear in Google Sheets

**Problem:** The form is in "demo mode" - it works without Sheet.Best configured.

**Solution:**
1. Make sure you've created a `.env.local` file (copy from `.env.local.example`)
2. Add your Sheet.Best API URL to `.env.local`:
   ```
   NEXT_PUBLIC_SHEET_BEST_API=https://sheet.best/api/sheets/YOUR_SHEET_ID
   ```
3. Restart the dev server (Ctrl+C, then `npm run dev`)
4. Test the form again

### Form Shows "Oops! Something went wrong"

**Possible causes:**
1. **Sheet.Best API URL is incorrect**
   - Double-check your API URL in `.env.local`
   - Make sure it starts with `https://sheet.best/api/sheets/`

2. **Google Sheet column names don't match**
   - Your Google Sheet must have these exact column headers:
     - Name
     - Email
     - Phone
     - Service
     - Message
     - Timestamp

3. **CORS issues**
   - Sheet.Best should handle CORS automatically
   - If you see CORS errors in the browser console, check your Sheet.Best configuration

4. **Network issues**
   - Check your internet connection
   - Open browser console (F12) to see detailed error messages

### How to Test the Form

1. Fill out all required fields
2. Click "Send Message"
3. You should see a green success message
4. Check your Google Sheet - a new row should appear instantly
5. Open browser console (F12) to see form data being logged

### Viewing Form Submissions in Demo Mode

Even without Sheet.Best configured, you can see form data:

1. Open browser console (F12 → Console tab)
2. Fill out and submit the form
3. Look for: `Form data to be sent: {Name: "...", Email: "...", ...}`
4. This shows exactly what data would be sent to your Google Sheet

## Development Server Issues

### Port Already in Use

If you see: `Port 3000 is in use`

The app will automatically use port 3001. Access it at:
- http://localhost:3001

To force port 3000:
```bash
# Find and kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Then restart
npm run dev
```

### Changes Not Appearing

1. **Hard refresh the browser:** Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

### TypeScript Errors

If you see TypeScript errors:
```bash
# Regenerate types
npm run build
```

## Styling Issues

### Tailwind Classes Not Working

1. Make sure you have the correct imports in your component
2. Restart the dev server
3. Clear cache: `rm -rf .next && npm run dev`

### Animations Not Smooth

1. Check if you have hardware acceleration enabled in your browser
2. Test in a different browser (Chrome recommended)
3. Reduce animation complexity if needed

## Deployment Issues

### Vercel Deployment

1. Make sure to add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_SHEET_BEST_API` with your Sheet.Best URL

2. Redeploy after adding environment variables

### Build Errors

```bash
# Test build locally before deploying
npm run build
```

If the build fails, fix the errors shown in the terminal.

## Getting Help

### Check Browser Console
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for error messages (shown in red)
4. Copy error messages when asking for help

### Useful Commands

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Clear cache and rebuild
rm -rf .next
npm run build

# Check for outdated packages
npm outdated

# Update all packages
npm update
```

## Common Questions

**Q: Can I use a different form backend instead of Sheet.Best?**
A: Yes! Edit `components/Contact.tsx` and replace the fetch call with your preferred API.

**Q: How do I add email notifications?**
A: Options:
1. Use Google Sheets + Zapier to send emails
2. Use Sheet.Best webhooks (paid plans)
3. Replace Sheet.Best with a backend that sends emails (like Formspree, EmailJS, etc.)

**Q: Can I add more form fields?**
A: Yes! Edit `components/Contact.tsx`:
1. Add new input fields in the JSX
2. Add the field to the `data` object in the submit handler
3. Add a new column in your Google Sheet with the same name

**Q: How do I prevent spam submissions?**
A: Options:
1. Add Google reCAPTCHA
2. Add honeypot fields
3. Add rate limiting
4. Use form validation services

## Still Having Issues?

1. Check the [README.md](README.md) for setup instructions
2. Review the [SETUP_GUIDE.md](SETUP_GUIDE.md) step by step
3. Make sure all environment variables are set correctly
4. Try in an incognito browser window
5. Check the browser console for error messages

---

**Most common fix:** Restart the dev server after making changes to `.env.local` or configuration files!
