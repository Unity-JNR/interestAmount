

let btn = document.querySelector('[data-c]')
let interest = document.getElementById('inte').value
let display = document.getElementById('result')


  btn.addEventListener('click',function(){
let interest = document.getElementById('inte').value
    
  calculateInterest(interest)
  })

function calculateInterest(rate) {
    // Assuming the interest rate is 15%
    const interestRate = 0.15;
  
    // Calculate the interest amount
    const interestAmount = rate * interestRate;
  
    // Return the calculated interest amount
    return display.innerText = 'R' + interestAmount;
  }
  
 
  
  
  
  
