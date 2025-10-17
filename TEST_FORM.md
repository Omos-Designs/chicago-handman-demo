# How to Test the Contact Form

## ✅ The form is now fixed and working!

### Quick Test (Demo Mode)

1. Open http://localhost:3001 in your browser
2. Scroll down to the Contact section
3. Fill out the form:
   - **Name:** Test User
   - **Email:** test@example.com
   - **Phone:** (123) 456-7890
   - **Service:** General Repairs
   - **Message:** This is a test message

4. Open Browser Console (F12 → Console tab)

5. Click "Send Message"

6. You should see:
   - ✅ A **green success message** on the page
   - 📋 Form data logged in the console with emojis
   - 💡 A helpful message about setting up Sheet.Best

### What You'll See in Console

```
📋 Form data (Demo Mode): {
  Name: "Test User",
  Email: "test@example.com",
  Phone: "(123) 456-7890",
  Service: "General Repairs",
  Message: "This is a test message",
  Timestamp: "2024-10-16T19:45:00.000Z"
}
💡 To save to Google Sheets, set up NEXT_PUBLIC_SHEET_BEST_API in .env.local
```

### Success Message

You should see:
> **Thank you! We'll get back to you within 24 hours. (Demo mode - Check console to see form data)**

### If You See "Oops!" Error

This means something went wrong. Check:
1. Browser console for error details
2. Make sure all form fields are filled
3. Try refreshing the page

## 🔌 Testing with Real Google Sheets

### Step 1: Set Up Sheet.Best

1. Go to https://sheet.best/
2. Sign up for free
3. Create a Google Sheet with these columns:
   ```
   Name | Email | Phone | Service | Message | Timestamp
   ```
4. Connect it to Sheet.Best
5. Copy your API URL

### Step 2: Configure Environment Variable

1. Create `.env.local` file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your API URL:
   ```
   NEXT_PUBLIC_SHEET_BEST_API=https://sheet.best/api/sheets/YOUR_ACTUAL_ID
   ```

3. Restart the dev server:
   ```bash
   # Press Ctrl+C to stop
   npm run dev
   ```

### Step 3: Test with Real API

1. Fill out the form again
2. Open Browser Console
3. Click "Send Message"
4. You should see:
   ```
   📤 Sending to Sheet.Best: https://sheet.best/api/sheets/...
   ✅ Successfully saved to Google Sheets!
   ```
5. Check your Google Sheet - a new row should appear!

### Success Message (Real Mode)

> **Thank you! We'll get back to you within 24 hours.**

(No "Demo mode" text)

## 🐛 Troubleshooting

### Form doesn't submit
- Check browser console for errors
- Make sure all required fields are filled
- Try refreshing the page

### Data not appearing in Google Sheet
- Verify your API URL in `.env.local`
- Make sure column names match exactly
- Check Sheet.Best dashboard for errors
- Restart dev server after changing `.env.local`

### Still see "Demo mode" after setting API
- Make sure `.env.local` file exists
- Verify no typos in `NEXT_PUBLIC_SHEET_BEST_API`
- Restart the dev server completely
- Check environment variable is loaded: look for `📤 Sending to Sheet.Best:` in console

## 🎯 Expected Behavior

### Demo Mode (No API configured)
- ✅ Form submits successfully
- ✅ Shows success message with "(Demo mode)"
- ✅ Logs data to console
- ❌ Does NOT save to Google Sheets

### Real Mode (API configured)
- ✅ Form submits successfully
- ✅ Shows success message (no "Demo mode")
- ✅ Saves to Google Sheets
- ✅ Logs confirmation to console

## 📊 Console Messages Reference

| Message | Meaning |
|---------|---------|
| 📋 Form data (Demo Mode): | Form is working in demo mode |
| 💡 To save to Google Sheets... | Reminder to set up API |
| 📤 Sending to Sheet.Best: | Form is sending to real API |
| ✅ Successfully saved to Google Sheets! | Data saved successfully |
| ❌ Sheet.Best error: | API returned an error |
| ❌ Form submission error: | Something went wrong |

## ✨ Tips

- Always check the browser console for detailed logs
- The form validates all fields before submitting
- Phone number format is flexible
- The timestamp is automatically generated
- Form clears after successful submission

---

**The form is now working perfectly in demo mode!** 🎉

Set up Sheet.Best when you're ready to capture real leads.
