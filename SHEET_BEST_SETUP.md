# Sheet.Best Setup Guide - Fixing "Connection columns are not unique" Error

## The Error

If you're seeing:
```
❌ Sheet.Best error: 422 {"detail":"Connection columns are not unique."}
```

This means there's a mismatch between the form data and your Google Sheet structure.

## Quick Fix

### Step 1: Check Your Google Sheet Column Names

Your Google Sheet **MUST** have these **EXACT** column names in the first row:

```
Name | Email | Phone | Service | Message | Timestamp
```

⚠️ **Important:**
- Column names are **case-sensitive** (use capital first letters)
- No extra spaces before or after column names
- No duplicate column names
- These must be in row 1 of your sheet

### Step 2: Verify Column Order (Optional)

The columns can be in any order, but it's recommended to use this order:

| A    | B     | C     | D       | E       | F         |
|------|-------|-------|---------|---------|-----------|
| Name | Email | Phone | Service | Message | Timestamp |

### Step 3: Check for Common Issues

#### Issue 1: Duplicate Columns
❌ **Wrong:**
```
Name | Email | Phone | Name | Service | Message | Timestamp
```
You have "Name" twice!

✅ **Correct:**
```
Name | Email | Phone | Service | Message | Timestamp
```

#### Issue 2: Wrong Capitalization
❌ **Wrong:**
```
name | email | phone | service | message | timestamp
```

✅ **Correct:**
```
Name | Email | Phone | Service | Message | Timestamp
```

#### Issue 3: Extra Spaces
❌ **Wrong:**
```
Name  | Email | Phone | Service | Message | Timestamp
```
(Notice the extra spaces)

✅ **Correct:**
```
Name | Email | Phone | Service | Message | Timestamp
```

#### Issue 4: Missing Columns
❌ **Wrong:**
```
Name | Email | Phone
```
You're missing Service, Message, and Timestamp!

✅ **Correct:**
```
Name | Email | Phone | Service | Message | Timestamp
```

## Step-by-Step Setup

### 1. Create a New Google Sheet

1. Go to https://sheets.google.com
2. Click "+ Blank" to create a new sheet
3. In row 1, add these column headers:
   - Cell A1: `Name`
   - Cell B1: `Email`
   - Cell C1: `Phone`
   - Cell D1: `Service`
   - Cell E1: `Message`
   - Cell F1: `Timestamp`

### 2. Format the Sheet (Optional but Recommended)

1. Select row 1 (the header row)
2. Make it bold
3. Add a background color (e.g., light blue)
4. Center align the text

### 3. Connect to Sheet.Best

1. Go to https://sheet.best/
2. Sign up for a free account
3. Click "Create Connection" or "New Connection"
4. Select your Google Sheet
5. Give it a name (e.g., "Chicago Handyman Leads")
6. Click "Create"
7. Copy the API URL (looks like: `https://sheet.best/api/sheets/xxxxx-xxxxx-xxxxx`)

### 4. Add to Your Project

1. Create `.env.local` file in your project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your API URL:
   ```
   NEXT_PUBLIC_SHEET_BEST_API=https://sheet.best/api/sheets/YOUR_ACTUAL_SHEET_ID
   ```

3. Save the file

4. Restart your dev server:
   ```bash
   # Press Ctrl+C to stop
   npm run dev
   ```

### 5. Test the Connection

1. Go to http://localhost:3001
2. Open browser console (F12)
3. Fill out the contact form
4. Click "Send Message"
5. Check the console for:
   ```
   📤 Sending to Sheet.Best...
   📋 Data being sent: {Name: "...", Email: "...", ...}
   ✅ Successfully saved to Google Sheets!
   ```
6. Check your Google Sheet - a new row should appear!

## Troubleshooting

### Still Getting 422 Error?

1. **Double-check column names:**
   - Open your Google Sheet
   - Look at row 1
   - Compare each name character by character
   - Look for extra spaces

2. **Check Sheet.Best dashboard:**
   - Go to https://sheet.best/
   - Click on your connection
   - Look for any error messages
   - Try "Test Connection"

3. **Re-create the connection:**
   - Delete the old connection in Sheet.Best
   - Create a new one
   - Copy the new API URL
   - Update `.env.local`
   - Restart the server

4. **Check browser console:**
   - Look at the "Data being sent" log
   - Compare the keys with your sheet column names
   - They must match exactly!

### Alternative: Use Different Column Names

If you want to use different column names in your sheet, you can modify the form data in `components/Contact.tsx`:

```typescript
const data = {
  "Full Name": formData.get("name") as string,  // If your column is "Full Name"
  "Email Address": formData.get("email") as string,  // If your column is "Email Address"
  // ... etc
};
```

### Test Without Sheet.Best

To test the form without Sheet.Best:

1. Remove or comment out the `NEXT_PUBLIC_SHEET_BEST_API` line in `.env.local`
2. Restart the server
3. The form will work in demo mode and log data to console

## Example Sheet Structure

Here's what your Google Sheet should look like:

| Name | Email | Phone | Service | Message | Timestamp |
|------|-------|-------|---------|---------|-----------|
| John Smith | john@example.com | (312) 555-1234 | General Repairs | Need help with door repair | 10/16/2024, 02:45:00 PM |
| Jane Doe | jane@example.com | (312) 555-5678 | Plumbing Services | Leaking faucet in kitchen | 10/16/2024, 03:15:00 PM |

## Common Sheet.Best Errors

| Error Code | Error Message | Solution |
|------------|---------------|----------|
| 422 | Connection columns are not unique | Check for duplicate column names |
| 422 | Invalid column names | Column names don't match form data |
| 401 | Unauthorized | Check your API URL |
| 404 | Not found | API URL is incorrect |
| 500 | Server error | Check Sheet.Best dashboard |

## Need More Help?

1. Check the console for detailed error messages
2. Review the troubleshooting tips that appear in console
3. Visit Sheet.Best documentation: https://sheet.best/docs
4. Make sure your Google Sheet is shared with Sheet.Best
5. Try creating a new Google Sheet from scratch

---

**Remember:** Column names in your Google Sheet must **EXACTLY** match:
```
Name | Email | Phone | Service | Message | Timestamp
```

Case-sensitive, no extra spaces, no duplicates!
