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

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Icons** - Inline SVG icons for better performance
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

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd prithwis-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `App.js`
3. Update navigation links in `Header.js`

### Modifying Icons

All icons are located in `src/components/icons/index.js`. Add new SVG icons by following the existing pattern.

### Styling

The project uses Tailwind CSS. Modify `tailwind.config.js` for custom themes and animations.

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