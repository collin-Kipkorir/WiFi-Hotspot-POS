 // Toggle mobile menu
 function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

function subscribe(plan) {
    // Redirect to a payment page with the selected plan
    alert(`You selected the ${plan} plan. Redirecting to payment...`);
  //  window.location.href = `/backend/server.js?plan=${plan}`;
}
