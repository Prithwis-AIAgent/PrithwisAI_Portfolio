// Test script for the contact form API
// Run with: node test/test-contact.js

const fetch = require('node-fetch');

// Test configuration
const API_URL = 'http://localhost:3000/api/contact'; // Change to your deployed URL when testing production
const TEST_DATA = {
  name: 'Test User',
  email: 'test@example.com',
  message: 'This is a test message from the contact form API test script.'
};

async function testContactAPI() {
  console.log('🧪 Testing Contact Form API...\n');
  
  try {
    console.log('📤 Sending test request to:', API_URL);
    console.log('📋 Test data:', JSON.stringify(TEST_DATA, null, 2));
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(TEST_DATA),
    });
    
    const responseData = await response.json();
    
    console.log('\n📥 Response Status:', response.status);
    console.log('📄 Response Data:', JSON.stringify(responseData, null, 2));
    
    if (response.ok) {
      console.log('\n✅ Test PASSED: Contact form API is working correctly!');
    } else {
      console.log('\n❌ Test FAILED: API returned an error');
    }
    
  } catch (error) {
    console.error('\n💥 Test ERROR:', error.message);
    console.log('\n❌ Test FAILED: Could not connect to API');
  }
}

// Test invalid data
async function testInvalidData() {
  console.log('\n🧪 Testing with invalid data...\n');
  
  const invalidData = {
    name: '',
    email: 'invalid-email',
    message: ''
  };
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invalidData),
    });
    
    const responseData = await response.json();
    
    console.log('📥 Invalid Data Response Status:', response.status);
    console.log('📄 Invalid Data Response:', JSON.stringify(responseData, null, 2));
    
    if (response.status === 400) {
      console.log('✅ Validation test PASSED: API correctly rejects invalid data');
    } else {
      console.log('❌ Validation test FAILED: API should reject invalid data');
    }
    
  } catch (error) {
    console.error('💥 Validation test ERROR:', error.message);
  }
}

// Run tests
async function runAllTests() {
  await testContactAPI();
  await testInvalidData();
  
  console.log('\n🏁 Testing complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Make sure your .env file has the correct BREVO_API_KEY');
  console.log('2. Update SENDER_EMAIL and RECIPIENT_EMAIL in your environment');
  console.log('3. Deploy to Vercel and test with the production URL');
}

runAllTests();