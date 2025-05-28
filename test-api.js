// Test script for API endpoints
const testData = {
  name: "Test User",
  email: "test@example.com",
  message: "This is a test message from the API test script"
};

fetch('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(testData)
})
.then(response => response.json())
.then(data => {
  console.log('Contact API Response:', data);
})
.catch(error => {
  console.error('Error:', error);
});
