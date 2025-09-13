# 🚀 Pre-Deployment Checklist

## ✅ Before Deploying to Render

### 1. **Local Testing**
- [ ] Backend runs locally: `cd backend && npm start`
- [ ] Frontend runs locally: `cd frontend && npm start`
- [ ] Contact form works locally
- [ ] API key test passes: `cd backend && npm run test-api`

### 2. **Environment Variables Ready**
- [ ] BREVO_API_KEY (starts with `xkeysib-`)
- [ ] SENDER_EMAIL: `daasprithwis864@gmail.com`
- [ ] RECIPIENT_EMAIL: `daasprithwis864@gmail.com`

### 3. **Code Verification**
- [ ] All dependencies in package.json files
- [ ] No syntax errors in JavaScript files
- [ ] All imports/requires are correct

### 4. **GitHub Repository**
- [ ] Latest code pushed to main branch
- [ ] No secrets in committed files
- [ ] Repository is public or Render has access

## 🎯 Render Deployment Settings

### Backend Service:
```
Name: prithwis-portfolio-backend
Root Directory: (empty)
Build Command: npm run build
Start Command: npm start
Environment Variables: [Set all 4 variables above]
```

### Frontend Service:
```
Name: prithwis-portfolio-frontend
Root Directory: (empty)
Build Command: npm run build-frontend
Publish Directory: frontend/build
Environment Variable: REACT_APP_API_URL = https://prithwis-portfolio-backend.onrender.com/api/contact
```

## 🔍 Post-Deployment Verification

### 1. **Backend Health Check**
- [ ] Visit: `https://prithwis-portfolio-backend.onrender.com/health`
- [ ] Should return: `{"status": "OK", ...}`

### 2. **Frontend Check**
- [ ] Visit your frontend URL
- [ ] All sections load correctly
- [ ] Dark/light mode toggle works

### 3. **Contact Form Test**
- [ ] Fill out contact form
- [ ] Submit successfully
- [ ] Check email for delivery

## 🚨 If Something Fails

1. **Check Render Logs**
   - Go to service → Logs tab
   - Look for error messages

2. **Verify Environment Variables**
   - Service Settings → Environment
   - All 4 variables set correctly

3. **Test API Directly**
   - Use Postman or curl to test `/api/contact`
   - Verify CORS headers

4. **Nuclear Option**
   - Delete service
   - Wait 5 minutes
   - Recreate with exact settings above

## 📞 Success Indicators

- ✅ Backend health endpoint returns 200 OK
- ✅ Frontend loads without console errors
- ✅ Contact form submits successfully
- ✅ Email arrives in inbox
- ✅ No CORS errors in browser console

---

**🎉 When all checkboxes are ✅, your portfolio is live and fully functional!**