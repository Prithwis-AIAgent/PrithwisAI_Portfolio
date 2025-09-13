# Deployment Guide for Prithwis Das Portfolio

## 🚀 Full Stack Deployment Options

### Option 1: Vercel (Recommended for Full Stack)
**Best for both frontend and backend together**

#### Frontend + Backend on Vercel:

1. **Deploy Backend First:**
   ```bash
   cd backend
   npm install
   vercel
   ```
   - Set environment variables in Vercel dashboard:
     - `BREVO_API_KEY`
     - `SENDER_EMAIL` 
     - `RECIPIENT_EMAIL`

2. **Deploy Frontend:**
   ```bash
   cd frontend
   npm install
   vercel
   ```

3. **Connect Frontend to Backend:**
   - Update frontend to use your backend URL
   - Or deploy both in same Vercel project

#### Single Vercel Project (Recommended):
1. **Project Structure:**
   ```
   portfolio/
   ├── frontend/     # React app
   ├── backend/      # API functions
   └── vercel.json   # Root config
   ```

2. **Root vercel.json:**
   ```json
   {
     "builds": [
       { "src": "frontend/package.json", "use": "@vercel/static-build" },
       { "src": "backend/api/*.js", "use": "@vercel/node" }
     ],
     "routes": [
       { "src": "/api/(.*)", "dest": "/backend/api/$1" },
       { "src": "/(.*)", "dest": "/frontend/$1" }
     ]
   }
   ```

### Option 2: Netlify Frontend + Vercel Backend
**Separate deployment for each part**

1. **Deploy Backend to Vercel:**
   ```bash
   cd backend
   vercel
   ```

2. **Deploy Frontend to Netlify:**
   ```bash
   cd frontend
   npm run build
   ```
   - Drag `build` folder to netlify.com/drop
   - Update API calls to use Vercel backend URL

### Option 2: Vercel
**Great for React apps with excellent performance**

1. **Deploy with Vercel CLI:**
   ```bash
   npm install -g vercel
   cd frontend
   vercel
   ```

2. **Or deploy via GitHub:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set root directory to `frontend`
   - Vercel auto-detects React settings
   - Deploy!

### Option 3: GitHub Pages
**Free hosting directly from your GitHub repo**

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Source: "GitHub Actions"

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Add deployment configuration"
   git push origin main
   ```

3. **The GitHub Action will automatically:**
   - Build your React app
   - Deploy to GitHub Pages
   - Your site will be available at: `https://yourusername.github.io/repository-name`

### Option 4: Firebase Hosting
**Google's hosting platform with great performance**

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   cd frontend
   firebase login
   firebase init hosting
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## 🛠️ Build Commands

### Local Development
```bash
cd frontend
npm install
npm start
```

### Production Build
```bash
cd frontend
npm install
npm run build
```

### Test Production Build Locally
```bash
cd frontend
npm install -g serve
npm run build
serve -s build
```

## 📋 Pre-deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Build completes without errors (`npm run build`)
- [ ] All images and assets are in the `public` folder
- [ ] Resume PDF is in `public/Prithwis_Das_AI_Resume1.pdf`
- [ ] All external links work correctly
- [ ] Responsive design tested on mobile/tablet
- [ ] Dark/light mode toggle works
- [ ] Contact form handles submission properly

## 🔧 Environment Variables (if needed)

Create `.env` file in frontend directory:
```
REACT_APP_SITE_URL=https://your-domain.com
REACT_APP_CONTACT_EMAIL=your-email@example.com
```

## 🌐 Custom Domain Setup

### For Netlify:
1. Buy domain from any registrar
2. In Netlify: Settings → Domain management → Add custom domain
3. Update DNS records as instructed

### For Vercel:
1. In Vercel dashboard → Domains
2. Add your domain
3. Configure DNS records

### For GitHub Pages:
1. Add `CNAME` file to `public` folder with your domain
2. Configure DNS with your registrar

## 📊 Performance Tips

- Images are optimized (use WebP format when possible)
- Tailwind CSS is purged in production
- Code splitting is handled by Create React App
- All icons are inline SVGs for better performance

## 🔍 SEO Optimization

Update `public/index.html`:
- Meta description
- Open Graph tags
- Twitter Card tags
- Favicon

## 📱 PWA (Progressive Web App) - Optional

To make it installable:
1. Add manifest.json to public folder
2. Add service worker
3. Update index.html with PWA meta tags

---

**Recommended:** Start with Netlify for the easiest deployment experience!