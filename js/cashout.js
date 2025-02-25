document.getElementById('cashout-btn').addEventListener('click', function () {
    
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amount);
    const balance = document.getElementById('main-balance').innerText;
    const convertedsMainBalance = parseFloat(balance);
    if (convertedPin === 1234) {
        const sum = convertedsMainBalance - convertedAmount;
        const balance = document.getElementById('main-balance').innerText = sum;
    }
    else {
        console.log('enter valid pin')
    }
})