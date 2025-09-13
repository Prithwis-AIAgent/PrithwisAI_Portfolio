# 🚀 Deployment Guide: GitHub → Vercel

## Step-by-Step Deployment Process

### 1. 📁 Prepare for GitHub

**Current Project Structure:**
```
portfolio/
├── frontend/          # React app
├── backend/           # API functions
├── vercel.json       # Vercel config (created)
├── .gitignore        # Git ignore (created)
└── README.md         # Project info
```

### 2. 🔐 Secure Your API Key

**IMPORTANT**: Never commit your `.env` file with API keys!

The `.gitignore` file I created will prevent this, but double-check:
```bash
# Make sure these are in .gitignore:
backend/.env
.env
```

### 3. 📤 Upload to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Full-stack portfolio with contact form"

# Create GitHub repository
# Go to github.com → New Repository → "prithwis-portfolio"

# Add remote origin (replace with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/prithwis-portfolio.git

# Push to GitHub
git push -u origin main
```

### 4. 🌐 Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub

2. **Import Project:**
   - Click "New Project"
   - Select your GitHub repository: `prithwis-portfolio`
   - Vercel will auto-detect the configuration

3. **Configure Build Settings:**
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `cd frontend && npm run build`
   - **Output Directory**: `frontend/build`

4. **Set Environment Variables:**
   - In project settings → Environment Variables
   - Add these variables:
     ```
     BREVO_API_KEY = [Your Brevo API key - get from backend/.env file]
     SENDER_EMAIL = daasprithwis864@gmail.com
     RECIPIENT_EMAIL = daasprithwis864@gmail.com
     ```

5. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete
   - Get your live URL!

#### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: prithwis-portfolio
# - Directory: ./ (current)

# Set environment variables
vercel env add BREVO_API_KEY
vercel env add SENDER_EMAIL  
vercel env add RECIPIENT_EMAIL

# Deploy to production
vercel --prod
```

### 5. ✅ Verify Deployment

1. **Check Frontend:**
   - Visit your Vercel URL
   - Test all sections load correctly
   - Verify dark/light mode toggle

2. **Test Contact Form:**
   - Fill out the contact form
   - Submit a test message
   - Check your email for the message

3. **Check API Endpoint:**
   - Your API will be at: `https://your-app.vercel.app/api/contact`

### 6. 🔧 Post-Deployment Setup

#### Custom Domain (Optional)
1. **Buy Domain** (e.g., prithwisdas.com)
2. **Add to Vercel:**
   - Project Settings → Domains
   - Add your domain
   - Configure DNS records

#### Analytics Setup
1. **Vercel Analytics:**
   - Enable in project settings
   - Track page views and performance

2. **Google Analytics** (Optional):
   - Add tracking code to `frontend/public/index.html`

### 7. 🔄 Continuous Deployment

Once connected to GitHub:
- **Auto-deploy**: Every push to `main` branch triggers deployment
- **Preview deployments**: Pull requests get preview URLs
- **Rollback**: Easy rollback to previous versions

### 8. 📊 Monitoring

#### Check Deployment Status:
- Vercel Dashboard → Your Project → Deployments
- View build logs for any issues

#### Monitor API Usage:
- Vercel Dashboard → Functions tab
- Check API call frequency and errors

#### Email Delivery:
- Brevo Dashboard → Statistics
- Monitor email delivery rates

## 🚨 Troubleshooting

### Common Issues:

1. **Build Fails:**
   ```bash
   # Check build locally first
   cd frontend
   npm run build
   ```

2. **API Not Working:**
   - Check environment variables in Vercel
   - Verify API key is correct
   - Check function logs in Vercel dashboard

3. **Contact Form Not Sending:**
   - Test API endpoint directly
   - Check Brevo dashboard for errors
   - Verify sender email is verified

### Debug Commands:
```bash
# Test locally before deploying
cd backend && npm run test-api
cd frontend && npm run build
```

## 🎯 Final Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created and connected
- [ ] Environment variables set in Vercel
- [ ] Frontend deploys successfully
- [ ] API functions work
- [ ] Contact form sends emails
- [ ] Custom domain configured (optional)
- [ ] Analytics enabled (optional)

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Test API locally with `npm run test-api`
3. Verify Brevo API key and sender email
4. Check GitHub repository is public or Vercel has access

---

**Next Steps After Deployment:**
1. Share your live portfolio URL
2. Test contact form with real submissions
3. Monitor email delivery and site performance
4. Consider adding more features or sections