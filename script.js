// Function to calculate the remaining fee
function calculateRemainingFee() {
  const location = document.getElementById('location').value;
  const totalFee = parseFloat(document.getElementById('totalFee').value);
  const totalScholarship = parseFloat(document.getElementById('totalScholarship').value);
  const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);

  const apiKey = '90274f6eba707762ef433965'; // Your API key
  const baseCurrency = 'GBP';
  const targetCurrency = 'PKR';

  const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const exchangeRate = data.rates[targetCurrency];

      if (!exchangeRate) {
        document.getElementById('result').textContent = 'Error: Exchange rate not available.';
        return;
      }

      let remainingFee;

      if (location === 'insideLondon') {
        remainingFee = ((totalFee - totalScholarship - initialDeposit) + 12006) * exchangeRate;
      } else if (location === 'outsideLondon') {
        remainingFee = (totalFee - totalScholarship - initialDeposit + 9207) * exchangeRate;
      }

      if (!isNaN(remainingFee)) {
        document.getElementById('result').textContent = 'Remaining Fee: ' + remainingFee.toFixed(2) + ' PKR';
      } else {
        document.getElementById('result').textContent = 'Invalid input. Please check your entries.';
      }
    })
    .catch(error => {
      console.error('Error fetching exchange rate:', error);
      document.getElementById('result').textContent = 'Error fetching exchange rate. Please try again later.';
    });
}
