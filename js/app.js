// Toggle mobile menu visibility
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden'); // Toggle the "hidden" class to show or hide the menu
}

// Subscribe to a plan
function subscribe(plan) {
  // Example subscription handling logic
  switch (plan) {
      case '1-hour':
          alert('You have subscribed to the 1 Hour Plan. Enjoy browsing!');
          break;
      case '3-hours':
          alert('You have subscribed to the 3 Hours Plan. Enjoy browsing!');
          break;
      case '4-hours':
          alert('You have subscribed to the 4 Hours Plan. Enjoy browsing!');
          break;
      case '6-hours':
          alert('You have subscribed to the 6 Hours Plan. Enjoy browsing!');
          break;
      case '8-hours':
          alert('You have subscribed to the 8 Hours Plan. Enjoy browsing!');
          break;
      case '1-day':
          alert('You have subscribed to the 1 Day Plan. Enjoy browsing!');
          break;
      default:
          alert('Invalid plan. Please select a valid subscription plan.');
  }
}
