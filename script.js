// JavaScript to handle hamburger button click event
document.getElementById('hamburgerBtn').addEventListener('click', function() {
    var navBar = document.getElementById('navBar');
    if (navBar.style.display === 'flex') {
      navBar.style.display = 'none';
    } else {
      navBar.style.display = 'flex';
    }
  });
  function calculatePrice() {
    const originalPriceInput = document.getElementById('originalPrice');
    const bookConditionInput = document.getElementById('bookCondition');
    const priceNowInput = document.getElementById('priceNow');
  
    if (!originalPriceInput.value || !bookConditionInput.value || !priceNowInput.value) {
      // Display an error message if any of the required fields are missing
      const errorElement = document.getElementById('error');
      errorElement.innerText = 'Please fill in all required fields.';
      return;
    }
  
    const originalPrice = parseFloat(originalPriceInput.value);
    const bookCondition = parseFloat(bookConditionInput.value);
    const priceNow = parseFloat(priceNowInput.value);
  
    // Calculate the second-hand price
    const ageInMonths = (new Date() - new Date(bookCondition)) / (1000 * 60 * 60 * 24 * 30);
    const depreciation = ageInMonths * 0.1;
    const secondHandPrice = (originalPrice - depreciation) * (priceNow / 100);
  
    // Display the second-hand price
    const resultElement = document.getElementById('result');
    resultElement.innerText = 'The second-hand price is: $' + secondHandPrice.toFixed(2);
  }
  