//alert("Hi, I am here to help you with EMI calculation")


// defining function for calculation
function calculateEMI() {
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var time = document.getElementById('time').value;
  
    // if there is any empty value

    if (principal === '' || rate === '' || time === '') {
        alert('Please enter all the values');
        return;
    }

    
    var monthlyRate = (rate / 100) / 12;

   
    var months = time * 12;

   
    var emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    emi = emi.toFixed(2);

    // displaying the value in the SPAN we have created
    document.getElementById('emi').innerText = emi;
}

function calculateSIP() {
    var monthlyInvestment = document.getElementById('monthly-investment').value;
    var rate = document.getElementById('sip-rate').value;
    var time = document.getElementById('sip-time').value;

    if (monthlyInvestment === '' || rate === '' || time === '') {
        alert('Please enter all the values');
        return;
    }

    var monthlyRate = (rate / 100) / 12;
    var months = time * 12;
    var futureValue = monthlyInvestment * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate * (1 + monthlyRate);
    futureValue = futureValue.toFixed(2);

    document.getElementById('sip-value').innerText = futureValue;
}
