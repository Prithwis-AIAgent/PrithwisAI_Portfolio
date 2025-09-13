@echo off
echo 🚀 Starting deployment process...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Make sure you're in the frontend directory.
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Build the project
echo 🔨 Building the project...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo.
    echo 📁 Build files are ready in the 'build' directory
    echo.
    echo 🌐 Deployment options:
    echo 1. Netlify: Drag ^& drop the 'build' folder to netlify.com/drop
    echo 2. Vercel: Run 'npx vercel --prod' in this directory
    echo 3. GitHub Pages: Push to main branch ^(GitHub Action will deploy^)
    echo 4. Manual: Upload 'build' folder contents to your web server
    echo.
    echo 🎉 Your portfolio is ready to go live!
) else (
    echo ❌ Build failed. Please check the errors above.
    pause
    exit /b 1
)

pause