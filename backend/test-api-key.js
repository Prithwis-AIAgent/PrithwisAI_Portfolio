// Quick API Key Test Script
// Run with: node test-api-key.js

require('dotenv').config();
const fetch = require('node-fetch');

async function testBrevoAPIKey() {
    console.log('🔑 Testing Brevo API Key...\n');

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
        console.log('❌ BREVO_API_KEY not found in .env file');
        console.log('📝 Please add your API key to the .env file:');
        console.log('   BREVO_API_KEY=xkeysib-your-actual-api-key-here');
        return;
    }

    if (apiKey === 'your_brevo_api_key_here') {
        console.log('❌ Please replace the placeholder API key with your actual Brevo API key');
        console.log('📝 Get your API key from: https://app.brevo.com/settings/keys/api');
        return;
    }

    console.log('🔍 API Key found:', apiKey.substring(0, 20) + '...');

    try {
        // Test API key by getting account info
        const response = await fetch('https://api.brevo.com/v3/account', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'api-key': apiKey,
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log('✅ API Key is valid!');
            console.log('📧 Account Email:', data.email);
            console.log('📊 Plan:', data.plan[0]?.type || 'Free');
            console.log('📈 Credits remaining:', data.plan[0]?.creditsLeft || 'Unlimited');

            // Test email sending capability
            console.log('\n🧪 Testing email sending...');
            await testEmailSending(apiKey);

        } else {
            const errorData = await response.json();
            console.log('❌ API Key is invalid');
            console.log('🔍 Error:', errorData.message);
            console.log('📝 Please check your API key in the .env file');
        }

    } catch (error) {
        console.log('❌ Network error:', error.message);
        console.log('🌐 Please check your internet connection');
    }
}

async function testEmailSending(apiKey) {
    const senderEmail = process.env.SENDER_EMAIL || 'daasprithwis864@gmail.com';
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'daasprithwis864@gmail.com';

    const testEmailData = {
        sender: {
            name: 'Portfolio Test',
            email: senderEmail,
        },
        to: [{
            email: recipientEmail,
            name: 'Prithwis Das',
        }],
        subject: 'Portfolio Contact Form - Test Email',
        htmlContent: `
      <h2>🧪 Test Email from Portfolio Contact Form</h2>
      <p>This is a test email to verify your Brevo integration is working correctly.</p>
      <p><strong>Sender:</strong> ${senderEmail}</p>
      <p><strong>Recipient:</strong> ${recipientEmail}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      <hr>
      <p><em>If you received this email, your contact form is ready to go! 🎉</em></p>
    `,
    };

    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'api-key': apiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testEmailData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('✅ Test email sent successfully!');
            console.log('📧 Message ID:', result.messageId);
            console.log('📬 Check your email:', recipientEmail);
        } else {
            const errorData = await response.json();
            console.log('❌ Failed to send test email');
            console.log('🔍 Error:', errorData.message);

            if (errorData.message.includes('sender')) {
                console.log('📝 Tip: Make sure your sender email is verified in Brevo dashboard');
                console.log('🔗 Verify at: https://app.brevo.com/senders');
            }
        }

    } catch (error) {
        console.log('❌ Email test error:', error.message);
    }
}

// Run the test
testBrevoAPIKey();