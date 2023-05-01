//animation
AOS.init();
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
      const resultElement = document.getElementById('resultElement');
      resultElement.innerText = 'Please fill in all required fields.';
      return;
    }
  
    const originalPrice = parseFloat(originalPriceInput.value);
    const bookCondition = bookConditionInput.value;
    const priceNow = parseFloat(priceNowInput.value);
  
    // Calculate the second-hand price
    //console.log(bookConditionInput.value);
    let depreciation = 0;
    if(bookCondition == "excellent"){
      depreciation = 0.2;
    }
    else if (bookCondition == "good"){
      depreciation = 0.3;
    }
    else if (bookCondition == "fair"){
      depreciation =0.4;
    }
    else depreciation = 0.5;
    const secondHandPrice = priceNow - (originalPrice*depreciation);
  
    // Display the second-hand price
    const resultElement = document.getElementById('resultElement');
    resultElement.innerText = 'The second-hand price is: $' + secondHandPrice.toFixed(2);
  }
  