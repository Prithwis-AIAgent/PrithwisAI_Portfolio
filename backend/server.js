// Express server for Render deployment
const express = require('express');
const cors = require('cors');
const path = require('path');

// Load environment variables
require('dotenv').config();

// Validate required environment variables
if (!process.env.BREVO_API_KEY) {
    console.error('❌ BREVO_API_KEY environment variable is required');
    process.exit(1);
}

// Import the contact handler
const contactHandler = require('./api/contact');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware - Enhanced CORS for production
const allowedOrigins = [
    'http://localhost:3000',
    'https://prithwis-portfolio-frontend.onrender.com',
    process.env.FRONTEND_URL,
    process.env.ALLOWED_ORIGIN
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, curl, etc.)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
            callback(null, true);
        } else {
            console.log('CORS blocked origin:', origin);
            callback(null, true); // Allow all origins for now, can restrict later
        }
    },
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Prithwis Portfolio Backend API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        await contactHandler(req, res);
    } catch (error) {
        console.error('Contact endpoint error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Catch all other routes
app.get('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found',
        availableEndpoints: [
            'GET /health - Health check',
            'POST /api/contact - Contact form submission'
        ]
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Unhandled error:', error);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!'
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
    console.log(`📧 Email service: ${process.env.BREVO_API_KEY ? 'Configured' : 'Not configured'}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});