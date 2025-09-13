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

2. **Configure Backend Settings:**
   ```
   Name: prithwis-portfolio-backend
   Region: Oregon (US West)
   Branch: main
   Root Directory: backend
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

3. **Set Environment Variables:**
   - Click "Environment" tab
   - Add variables (get BREVO_API_KEY from your backend/.env file):
     ```
     BREVO_API_KEY = [Your API key from .env file]
     SENDER_EMAIL = daasprithwis864@gmail.com
     RECIPIENT_EMAIL = daasprithwis864@gmail.com
     NODE_ENV = production
     ```

4. **Deploy Backend:**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Note your backend URL: `https://prithwis-portfolio-backend.onrender.com`

### Step 3: Deploy Frontend

1. **Create New Static Site:**
   - Dashboard → "New" → "Static Site"
   - Connect same GitHub repository: `PrithwisAI_Portfolio`
   - Name: `prithwis-portfolio-frontend`

2. **Configure Frontend Settings:**
   ```
   Name: prithwis-portfolio-frontend
   Branch: main
   Root Directory: frontend
   Build Command: npm install && npm run build
   Publish Directory: build
   ```

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

### Backend Issues:
1. **Service won't start:**
   - Check build logs in Render dashboard
   - Verify environment variables are set
   - Check `package.json` scripts

2. **API not responding:**
   - Check service logs
   - Verify BREVO_API_KEY is correct
   - Test health endpoint

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