console.log("Hello from app.js")
const depositButton = document.querySelector('#checking > input.deposit')
const withdrawButton = document.querySelector("#checking > input.withdraw")
const savingsDeposit = document.querySelector("#savings > input.deposit")     
const savingsWithdrawal = document.querySelector("#savings > input.withdraw")
//   

let userCheckingInput = document.querySelector("#checking > input.input")
let userSavingsAmount = document.querySelector("#savings > input.input")
let showBalance = document.querySelector("#checking > div")
let showbalanceSavings = document.querySelector("#savings > div")
let savingsBalance = 0;
let balance = 0;


// the deposit on click function
depositButton.onclick = function() { 
    console.log("deposit checking", userCheckingInput.value)
    balance += parseInt(userCheckingInput.value)
    // shows balance to the screen
    showBalance.innerHTML = "$"+balance+".00"
    
    userCheckingInput.value = ""

 };



 withdrawButton.onclick = function() { 
    console.log("withdaw checking")
    if(parseInt(userCheckingInput.value) > balance){
// shows balance to the screen
        showBalance.innerHTML = "Insuffiecient funds!"
        userCheckingInput.value = ""
        return
    }
    balance -= parseInt(userCheckingInput.value)
    showBalance.innerHTML = "$"+balance+".00"
    userCheckingInput.value = ""

    
 };

 savingsDeposit.onclick = function() { 
    console.log("deposit savings", userSavingsAmount.value)
    savingsBalance += parseInt(userSavingsAmount.value)
    showbalanceSavings.innerHTML = "$"+savingsBalance+".00"
    //resets input box to empty string
    userSavingsAmount.value = ""
 };

savingsWithdrawal.onclick = function() { 
    console.log("withdaw savings")
    savingsBalance -= parseInt(userSavingsAmount.value)
    showbalanceSavings.innerHTML = "$"+savingsBalance+".00"
    userSavingsAmount.value = "" 
 };





