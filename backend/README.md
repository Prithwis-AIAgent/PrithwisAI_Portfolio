# Portfolio Backend - Contact Form API

This backend provides serverless functions for the Prithwis Das portfolio website, specifically handling contact form submissions via Brevo email service.

## 🚀 Features

- **Serverless Architecture**: Designed for Vercel deployment
- **Email Integration**: Uses Brevo (formerly Sendinblue) for reliable email delivery
- **Input Validation**: Comprehensive validation for form data
- **Error Handling**: Robust error handling with detailed logging
- **CORS Support**: Configured for cross-origin requests
- **Security**: Environment variable protection for sensitive data

## 📁 Project Structure

```
backend/
├── api/
│   └── contact.js          # Main contact form handler
├── test/
│   └── test-contact.js     # API testing script
├── .env.example            # Environment variables template
├── package.json            # Dependencies and scripts
├── vercel.json            # Vercel deployment configuration
└── README.md              # This file
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Get your Brevo API key:
   - Sign up at [Brevo](https://www.brevo.com/)
   - Go to Settings → API Keys
   - Create a new API key

3. Update `.env` with your credentials:
   ```env
   BREVO_API_KEY=your_actual_brevo_api_key
   SENDER_EMAIL=noreply@yourdomain.com
   RECIPIENT_EMAIL=daasprithwis864@gmail.com
   ```

### 3. Local Development

```bash
# Install Vercel CLI globally
npm install -g vercel

# Start local development server
npm run dev
```

The API will be available at `http://localhost:3000/api/contact`

### 4. Testing

```bash
# Run the test script
npm test
```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Set Environment Variables** in Vercel Dashboard:
   - Go to your project settings
   - Add environment variables:
     - `BREVO_API_KEY`
     - `SENDER_EMAIL`
     - `RECIPIENT_EMAIL`

### Alternative: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Set environment variables in Vercel dashboard
4. Auto-deploy on every push

## 📧 Email Configuration

### Brevo Setup

1. **Verify Sender Domain/Email**:
   - In Brevo dashboard, go to Senders & IP
   - Add and verify your sender email/domain

2. **API Key Permissions**:
   - Ensure your API key has "Send emails" permission

3. **Email Templates**:
   - The function sends HTML formatted emails
   - Includes both HTML and plain text versions

## 🔧 API Usage

### Endpoint
```
POST /api/contact
```

### Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

### Response (Success)
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon.",
  "messageId": "brevo_message_id"
}
```

### Response (Error)
```json
{
  "success": false,
  "message": "Error description"
}
```

## 🔒 Security Features

- **Input Validation**: All fields are validated
- **Email Format Validation**: Regex validation for email addresses
- **Environment Variables**: Sensitive data stored securely
- **Error Handling**: No sensitive information leaked in error messages
- **CORS Configuration**: Controlled cross-origin access

## 🧪 Testing

The project includes a comprehensive test script:

```bash
# Test the API locally
node test/test-contact.js
```

Tests include:
- Valid form submission
- Invalid data validation
- Error handling
- Response format verification

## 📊 Monitoring

### Logs
- All requests are logged with timestamps
- Errors include stack traces for debugging
- Brevo API responses are logged

### Vercel Analytics
- Function execution time
- Error rates
- Request volume

## 🔄 Frontend Integration

Update your frontend contact form to use the API:

```javascript
const handleSubmit = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Show success message
      console.log(result.message);
    } else {
      // Show error message
      console.error(result.message);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
```

## 🚨 Troubleshooting

### Common Issues

1. **"BREVO_API_KEY not set"**
   - Check environment variables in Vercel dashboard
   - Ensure .env file exists locally

2. **"Failed to send email"**
   - Verify Brevo API key permissions
   - Check sender email is verified in Brevo

3. **CORS errors**
   - Check allowed origins in the function
   - Ensure frontend domain is correct

4. **"Method Not Allowed"**
   - Ensure you're making POST requests
   - Check request headers

### Debug Mode

Add `console.log` statements in the function for debugging:

```javascript
console.log('Request received:', req.body);
console.log('Environment check:', !!process.env.BREVO_API_KEY);
```

## 📞 Support

For issues or questions:
- Check Vercel function logs
- Review Brevo API documentation
- Test with the included test script

## 🔄 Updates

To update the backend:
1. Make changes to the code
2. Test locally with `npm run dev`
3. Deploy with `npm run deploy`
4. Monitor logs for any issues