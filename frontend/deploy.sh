#!/bin/bash

# Portfolio Deployment Script
# Make sure you're in the frontend directory

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the frontend directory."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Build files are ready in the 'build' directory"
    echo ""
    echo "🌐 Deployment options:"
    echo "1. Netlify: Drag & drop the 'build' folder to netlify.com/drop"
    echo "2. Vercel: Run 'npx vercel --prod' in this directory"
    echo "3. GitHub Pages: Push to main branch (GitHub Action will deploy)"
    echo "4. Manual: Upload 'build' folder contents to your web server"
    echo ""
    echo "🎉 Your portfolio is ready to go live!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi