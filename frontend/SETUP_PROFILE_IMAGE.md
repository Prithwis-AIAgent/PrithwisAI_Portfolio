# Profile Image Setup Instructions

## Steps to add your profile picture:

1. **Save your profile image:**
   - Save the profile picture you shared in the chat
   - Name it: `profile-picture.jpg`
   - Place it in: `frontend/public/profile-picture.jpg`

2. **Image specifications:**
   - Recommended size: 400x400 pixels or larger (square aspect ratio)
   - Format: JPG, PNG, or WebP
   - File size: Keep under 500KB for optimal loading

3. **Alternative method:**
   - You can also use any image hosting service (like Imgur, Cloudinary, etc.)
   - Update the `src` attribute in `AboutSection.js` with the hosted URL

## Current setup:
- ✅ AboutSection.js updated to use `/profile-picture.jpg`
- ✅ Placeholder image removed
- ⏳ Need to add your actual image file

## File location:
```
frontend/
├── public/
│   ├── profile-picture.jpg  ← Add your image here
│   └── index.html
└── src/
    └── components/
        └── sections/
            └── AboutSection.js  ← Already updated
```

After adding the image, run:
```bash
cd frontend
npm start
```

Your profile picture will appear in the About section with the animated gradient border!