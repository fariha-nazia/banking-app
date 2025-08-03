/**
console.log('home js connected');

// Add money
// step 1: add event listener.
document.getElementById('add-money-btn').addEventListener('click', function(event){

    // to check if the event listener is working or not
    console.log('btn add money clicked.');

    // step 2:fetch the input amount from 
    // add-money-input for amount
    const addMoneyInput = document.getElementById('add-money-input').value;
    console.log(addMoneyInput);

    // step 2: fetch the pin from 
    // add-money-pin-input for pin
    const addMoneyInputPin = document.getElementById('add-money-pin-input').value;
    console.log(addMoneyInputPin);

    // Step 3: validate the pin - this method is a bad method
    if(addMoneyInputPin === '1111'){
        console.log('add money successful');

        // Step 4: fetch the current balance from account-balance
        const accountBalance = document.getElementById('account-balance').innerText;
        console.log(accountBalance);

        // step 5: adding new balance with old balance. 
        const addMoneyNumber = parseFloat(addMoneyInput);
        const accountBalanceNumber = parseFloat(accountBalance);
        console.log(addMoneyNumber, accountBalanceNumber);

        const newBalance = addMoneyNumber + accountBalanceNumber;
        console.log(newBalance)

        // step 6: Display the updated balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance


    }
    else{
        alert('Please input 1111 in Pin');
    }
});
 */ 