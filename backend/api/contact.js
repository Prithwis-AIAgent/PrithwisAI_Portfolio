// Contact Form Serverless Function for Prithwis Das Portfolio
// Designed for Vercel deployment with Brevo email service integration

require('dotenv').config();
const fetch = require('node-fetch');

/**
 * Serverless function handler for contact form submissions
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 */
module.exports = async (req, res) => {
    // Set CORS headers to allow frontend requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only accept POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method Not Allowed. Only POST requests are accepted.'
        });
    }

    try {
        // Extract form data from request body
        const { name, email, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields. Please provide name, email, and message.'
            });
        }

        // Validate email format (basic validation)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format.'
            });
        }

        // Check for environment variables
        const brevoApiKey = process.env.BREVO_API_KEY;
        if (!brevoApiKey) {
            console.error('BREVO_API_KEY environment variable is not set');
            return res.status(500).json({
                success: false,
                message: 'Server configuration error. Please try again later.'
            });
        }

        // Brevo API configuration
        const brevoApiUrl = 'https://api.brevo.com/v3/smtp/email';

        // Email configuration - Update these with your verified Brevo details
        const senderEmail = process.env.SENDER_EMAIL || 'noreply@prithwisdas.com';
        const senderName = 'Portfolio Contact Form';
        const recipientEmail = process.env.RECIPIENT_EMAIL || 'daasprithwis864@gmail.com';
        const recipientName = 'Prithwis Das';

        // Prepare email data for Brevo API
        const emailData = {
            sender: {
                name: senderName,
                email: senderEmail,
            },
            to: [{
                email: recipientEmail,
                name: recipientName,
            }],
            subject: `New Portfolio Contact: ${name}`,
            htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #3b82f6; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
            .message-content { white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>Someone has reached out through your portfolio website!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value message-content">${message}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
            // Also include plain text version
            textContent: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from Portfolio Contact Form
      `.trim(),
        };

        // Make API request to Brevo
        const response = await fetch(brevoApiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'api-key': brevoApiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        // Handle Brevo API response
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Brevo API Error:', {
                status: response.status,
                statusText: response.statusText,
                error: errorData
            });

            return res.status(500).json({
                success: false,
                message: 'Failed to send email. Please try again later or contact directly.'
            });
        }

        // Success response
        const responseData = await response.json();
        console.log('Email sent successfully:', responseData);

        return res.status(200).json({
            success: true,
            message: 'Thank you for your message! I will get back to you soon.',
            messageId: responseData.messageId
        });

    } catch (error) {
        // Log error for debugging
        console.error('Contact form error:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        });

        return res.status(500).json({
            success: false,
            message: 'An unexpected error occurred. Please try again later.'
        });
    }
};