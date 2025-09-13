# Prithwis Das - AI Engineer Portfolio

A modern, full-stack portfolio website built with React and Node.js showcasing AI engineering expertise and projects. Features a working contact form with email integration.

## 🌟 Live Demo
- **Website**: [Your deployed URL will be here]
- **Contact Form**: Fully functional with email notifications

## 🚀 Features
- **Frontend**: React 18 + Tailwind CSS
- **Backend**: Node.js serverless functions
- **Email**: Brevo integration for contact form
- **Responsive**: Mobile-first design
- **Dark Mode**: Toggle between light/dark themes
- **Performance**: Optimized for speed and SEO

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Modern UI**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading and smooth scrolling
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18 + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Email Service**: Brevo API integration
- **Deployment**: Render (full-stack hosting)
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
prithwis-portfolio/
├── public/
│   ├── index.html
│   └── Prithwis_Das_AI_Resume1.pdf
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── index.js          # All SVG icons
│   │   ├── sections/
│   │   │   ├── AboutSection.js   # Hero/About section
│   │   │   ├── SkillsSection.js  # Skills showcase
│   │   │   ├── ProjectsSection.js # Featured projects
│   │   │   ├── ResumeSection.js  # Professional timeline
│   │   │   └── ContactSection.js # Contact form
│   │   ├── Header.js             # Navigation header
│   │   └── Footer.js             # Site footer
│   ├── App.js                    # Main app component
│   ├── index.js                  # React entry point
│   └── index.css                 # Global styles with Tailwind
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Brevo account for email service

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/Prithwis-AIAgent/PrithwisAI_Portfolio.git
cd PrithwisAI_Portfolio
```

2. **Setup Backend:**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your Brevo API key
npm start
```

3. **Setup Frontend:**
```bash
cd frontend
npm install
npm start
```

4. **Open [http://localhost:3000](http://localhost:3000)** to view the portfolio.

## 🌐 Deployment

This project is configured for **Render** deployment. See [RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md) for detailed instructions.

### Quick Deploy to Render:
1. Push code to GitHub
2. Create Render account
3. Deploy backend as Web Service
4. Deploy frontend as Static Site
5. Configure environment variables

## 🎨 Customization

### Frontend Customization

1. **Add New Sections**: Create components in `frontend/src/components/sections/`
2. **Modify Icons**: Update `frontend/src/components/icons/index.js`
3. **Styling**: Edit Tailwind classes or `frontend/tailwind.config.js`
4. **Content**: Update personal information in component files

### Backend Customization

1. **Email Templates**: Modify `backend/api/contact.js`
2. **API Endpoints**: Add new routes in `backend/server.js`
3. **Email Service**: Configure Brevo settings in environment variables

## 📱 Sections Overview

- **About**: Hero section with introduction and social links
- **Skills**: Technical competencies organized by category
- **Projects**: Featured projects with GitHub links
- **Resume**: Professional timeline with download option
- **Contact**: Contact form for inquiries

## 🌟 Key Features

- **Theme Toggle**: Persistent dark/light mode with system preference detection
- **Smooth Scrolling**: Animated navigation between sections
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Hover Effects**: Interactive elements with smooth transitions
- **Form Handling**: Contact form with validation and feedback

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Prithwis Das - [LinkedIn](https://www.linkedin.com/in/prithwis-das-8b4a79326) - [GitHub](https://github.com/Prithwis-AIAgent)