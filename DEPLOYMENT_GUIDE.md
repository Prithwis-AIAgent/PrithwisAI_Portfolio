# 🚀 Render Deployment Guide

## Overview
Deploy your full-stack portfolio to Render with separate frontend and backend services.

## 📋 Prerequisites
- ✅ Code pushed to GitHub
- ✅ Brevo API key ready (from your .env file)
- ✅ Render account (free tier available)

## 🎯 Deployment Strategy
- **Frontend**: Static Site (React build)
- **Backend**: Web Service (Express.js API)

## 🚀 Step-by-Step Deployment

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Connect your GitHub account

### Step 2: Deploy Backend First

1. **Create New Web Service:**
   - Dashboard → "New" → "Web Service"
   - Connect GitHub repository: `PrithwisAI_Portfolio`
   - Name: `prithwis-portfolio-backend`

2. **Configure Backend Settings (BULLETPROOF SOLUTION):**
   ```
   Name: prithwis-portfolio-backend
   Region: Oregon (US West)
   Branch: main
   Root Directory: (leave empty)
   Runtime: Node
   Build Command: npm run build
   Start Command: npm start
   ```
   
   **✅ GUARANTEED TO WORK**: 
   - Build Command: `npm run build` (installs all backend dependencies)
   - Start Command: `npm start` (starts Express server)
   - Includes dependency verification and error handling
   - Root package.json manages everything

3. **Set Environment Variables (CRITICAL):**
   - Click "Environment" tab
   - Add these EXACT variables:
     ```
     BREVO_API_KEY = [Your API key from backend/.env file - starts with xkeysib-]
     SENDER_EMAIL = daasprithwis864@gmail.com
     RECIPIENT_EMAIL = daasprithwis864@gmail.com
     NODE_ENV = production
     PORT = 10000
     ```
   
   **🚨 VALIDATION**: 
   - BREVO_API_KEY must start with `xkeysib-`
   - All email addresses must be valid
   - PORT is set to Render's default

4. **Deploy Backend:**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Note your backend URL: `https://prithwis-portfolio-backend.onrender.com`

### Step 3: Deploy Frontend

1. **Create New Static Site:**
   - Dashboard → "New" → "Static Site"
   - Connect same GitHub repository: `PrithwisAI_Portfolio`
   - Name: `prithwis-portfolio-frontend`

2. **Configure Frontend Settings (SIMPLIFIED APPROACH):**
   ```
   Name: prithwis-portfolio-frontend
   Branch: main
   Root Directory: (leave empty or use .)
   Build Command: npm run build-frontend
   Publish Directory: frontend/build
   ```
   
   **🚨 NEW APPROACH**: 
   - Leave Root Directory EMPTY or set to `.`
   - Use root package.json script to build frontend
   - Set Publish Directory to `frontend/build`

3. **Set Environment Variables:**
   - Add environment variable:
     ```
     REACT_APP_API_URL = https://prithwis-portfolio-backend.onrender.com/api/contact
     ```

4. **Deploy Frontend:**
   - Click "Create Static Site"
   - Wait for deployment (3-5 minutes)

### Step 4: Test Deployment

1. **Test Backend API:**
   - Visit: `https://prithwis-portfolio-backend.onrender.com/health`
   - Should return: `{"status": "OK", "message": "..."}`

2. **Test Frontend:**
   - Visit your frontend URL
   - Test contact form submission

## 🔧 Configuration Files

### `render.yaml` (Optional)
- Defines both services in one file
- Can deploy both services together

### `backend/server.js`
- Express server for Render
- Handles API routes
- CORS configuration

## 🚨 Troubleshooting

### "Couldn't find package.json" Error:
**This is the most common issue! Here are 3 solutions:**

**Solution 1: Use Root Package.json (Recommended)**
- Root Directory: (empty) or `.`
- Build Command: `npm run install-backend`
- Start Command: `npm start`

**Solution 2: Manual Directory Setup**
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

**Solution 3: Nuclear Option (If all else fails)**
- Delete the service completely
- Wait 5 minutes
- Create new service with EXACT settings above
- Verify environment variables are set BEFORE first deploy

**Solution 4: Debug Commands**
After deployment, check these URLs:
- `https://your-backend-url.onrender.com/health` (should return OK)
- Check Render logs for any error messages
- Verify all environment variables are set in Render dashboard

### Backend Issues:
1. **Service won't start:**
   - Check build logs in Render dashboard
   - Verify Root Directory is `./backend`
   - Check environment variables are set

2. **API not responding:**
   - Check service logs
   - Verify BREVO_API_KEY is correct
   - Test health endpoint: `https://your-backend-url.onrender.com/health`

### Frontend Issues:
1. **Build fails:**
   - Check build logs
   - Test build locally: `npm run build`

2. **Contact form not working:**
   - Check browser console for errors
   - Verify API URL environment variable
   - Check CORS settings in backend

## 💰 Render Free Tier
- **Web Services**: 750 hours/month
- **Static Sites**: Unlimited
- **Bandwidth**: 100GB/month

## 🔄 Updates
- Push to GitHub main branch
- Render automatically rebuilds and deploys
- Monitor deployment status in dashboard

## 📞 Support
- **Render Docs**: [render.com/docs](https://render.com/docs)
- **GitHub Repository**: Your deployed code
- **Brevo Dashboard**: For email delivery monitoring

---

**🎉 Your portfolio will be live with a fully functional contact form!**