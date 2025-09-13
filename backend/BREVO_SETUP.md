# Brevo API Setup Guide

## 🚀 Step-by-Step Brevo Configuration

### Step 1: Create Brevo Account

1. **Go to Brevo Website:**
   - Visit [https://www.brevo.com/](https://www.brevo.com/)
   - Click "Sign up for free"

2. **Create Account:**
   - Enter your email: `daasprithwis864@gmail.com`
   - Create a strong password
   - Verify your email address

3. **Complete Profile:**
   - Add your name: "Prithwis Das"
   - Select "Individual" for account type
   - Choose "Developer/Technical" as your role

### Step 2: Get API Key

1. **Access API Settings:**
   - Login to your Brevo dashboard
   - Click on your profile (top right)
   - Go to "Settings" → "API Keys"

2. **Create New API Key:**
   - Click "Generate a new API key"
   - Name: "Portfolio Contact Form"
   - Permissions: Select "Send emails"
   - Click "Generate"

3. **Copy API Key:**
   - Copy the generated API key (starts with `xkeysib-`)
   - ⚠️ **Important**: Save it immediately - you won't see it again!

### Step 3: Configure Sender Email

1. **Add Sender:**
   - Go to "Senders & IP" in dashboard
   - Click "Add a sender"
   - Add email: `noreply@prithwisdas.com` (or use your domain)
   - If you don't have a domain, you can use: `daasprithwis864@gmail.com`

2. **Verify Sender:**
   - Brevo will send verification email
   - Click the verification link
   - Wait for approval (usually instant)

### Step 4: Update Environment Variables

1. **Local Development (.env file):**
   ```env
   BREVO_API_KEY=xkeysib-your-actual-api-key-here
   SENDER_EMAIL=daasprithwis864@gmail.com
   RECIPIENT_EMAIL=daasprithwis864@gmail.com
   ```

2. **For Vercel Deployment:**
   - Go to Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add:
     - `BREVO_API_KEY`: `xkeysib-your-actual-api-key`
     - `SENDER_EMAIL`: `daasprithwis864@gmail.com`
     - `RECIPIENT_EMAIL`: `daasprithwis864@gmail.com`

### Step 5: Test the Setup

1. **Install Dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Update .env file:**
   - Replace `your_brevo_api_key_here` with your actual API key

3. **Test Locally:**
   ```bash
   npm run dev
   ```

4. **Run Test Script:**
   ```bash
   npm test
   ```

## 🔧 Quick Setup Commands

```bash
# 1. Navigate to backend
cd backend

# 2. Install dependencies
npm install

# 3. Copy and edit environment file
cp .env.example .env
# Edit .env with your API key

# 4. Test the API
npm test

# 5. Start development server
npm run dev
```

## 📧 Email Configuration Options

### Option 1: Use Gmail (Easiest)
```env
SENDER_EMAIL=daasprithwis864@gmail.com
RECIPIENT_EMAIL=daasprithwis864@gmail.com
```

### Option 2: Custom Domain (Professional)
```env
SENDER_EMAIL=contact@prithwisdas.com
RECIPIENT_EMAIL=daasprithwis864@gmail.com
```

## 🚨 Troubleshooting

### Common Issues:

1. **"Invalid API Key"**
   - Check if API key is correct
   - Ensure no extra spaces in .env file
   - Verify API key has "Send emails" permission

2. **"Sender not verified"**
   - Check Brevo dashboard for sender status
   - Verify the sender email address
   - Wait for verification approval

3. **"Daily limit exceeded"**
   - Free Brevo accounts have daily limits
   - Check your usage in dashboard
   - Upgrade plan if needed

### Test Email Format:
The API will send emails like this:

**Subject:** New Portfolio Contact: [Name]
**From:** Portfolio Contact Form <your-sender-email>
**To:** daasprithwis864@gmail.com

**Content:**
```
New Contact Form Submission

Name: [Visitor Name]
Email: [Visitor Email]

Message:
[Visitor Message]
```

## 🎯 Next Steps After Setup:

1. ✅ Get Brevo API key
2. ✅ Update .env file
3. ✅ Test locally
4. ✅ Deploy to Vercel
5. ✅ Set Vercel environment variables
6. ✅ Test production deployment

## 📞 Support

If you encounter issues:
- Check Brevo documentation: [https://developers.brevo.com/](https://developers.brevo.com/)
- Verify API key permissions
- Check sender email verification status
- Review Brevo dashboard for error logs