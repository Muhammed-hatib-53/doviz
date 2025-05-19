const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

// Define a mapping of currency rates
const currencyRates = {
  USD: {
    EUR: 0.82,
    GBP: 0.72,
    JPY: 109.57
    // Add more currency rates as needed
  },
  EUR: {
    USD: 1.22,
    GBP: 0.88,
    JPY: 131.59
    // Add more currency rates as needed
  },
  GBP: {
    USD: 1.39,
    EUR: 1.14,
    JPY: 149.42
    // Add more currency rates as needed
  }
  // Add more currency rates as needed
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;

  if (isNaN(amount)) {
    resultDiv.textContent = 'Please enter a valid amount.';
    return;
  }

  if (!(fromCurrency in currencyRates) || !(toCurrency in currencyRates[fromCurrency])) {
    resultDiv.textContent = 'Invalid currency selection.';
    return;
  }

  const rate = currencyRates[fromCurrency][toCurrency];
  const result = amount * rate;
  
  resultDiv.textContent = `${amount.toFixed(2)} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
});
