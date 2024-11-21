// Toggle mobile menu visibility
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden'); // Toggle the "hidden" class to show or hide the menu
}

// Subscribe to a plan
function subscribe(plan) {
  const subscriptionData = { plan }; // Define the plan data to be sent to the backend

  // Displaying an alert and simulating the backend response for now
  console.log(`Subscribing to ${plan} plan...`);

  // Make the actual fetch request to the backend
  fetch('http://localhost:3000/api/subscribe', { // Change this URL if needed
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(subscriptionData),
  })
  .then(response => {
    // Check if the response is not ok
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Assuming the backend returns a message field in the response
    alert(`Subscription successful: ${data.message}`);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error with the subscription. Please try again later.');
  });
}


// Close modal functionality (if you are using modal)
function closeModal() {
  document.getElementById('successModal').classList.add('hidden');
}
