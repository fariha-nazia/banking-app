// console.log('cash out added');

/**
 * You want to cash out an amount and show the updated amount
 * Step 1: Add event listener to the btn so that it does something
 * Step 2: Fetch input of Pin and Amount from user
 * Step 3: VAlidation of the pin
 * Step 4: Fetch the current balance
 * Step 5: Do the subtraction
 * Step 6: Update the UI / show the updated value
 *   */ 


// =======================================================================================================================
// =======================================================================================================================
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('cash-out-input');
    const cashOutPin = getInputFieldValueById('cash-out-pin-input');
    console.log(cashOut, cashOutPin);

    if(isNaN(cashOut)){
        alert('Please input a number');
        return;
    }

    if(cashOutPin === 1111){

        const balance = getTextFieldValueById('account-balance');

        // if cash out amount more than account balance
        if(cashOut > balance){
            alert('You do not have enough money')
            return;
        }

        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>Cash Out ${cashOut}. New Balance ${newBalance}</h4>
        `;
        document.getElementById('transaction-history-box').appendChild(div);
    }
    else{
        alert('Please try PIN 1111')
    }
});


// =======================================================================================================================
// =======================================================================================================================


/* 
// 1. Add event listener
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('cashOut btn is being clicked');

    // 2 Fetching the inputs
    // 2.1. Fetching the input amount.
    const cashOutInput = document.getElementById('cash-out-input').value;
    const cashOutInputNumber = parseFloat(cashOutInput);

    // console.log(cashOutInput, cashOutInputNumber);

    // 2.2 fetching the input pin
    const cashOutPin = document.getElementById('cash-out-pin-input').value;
    // console.log(cashOutPin);

    // 3. Verifying the pin
    if(cashOutPin === '1111'){
        // console.log('cash out working');

        // 4. Fetching the current balance
        const balanceCurrent = document.getElementById('account-balance').innerText;
        const balanceCurrentNumber = parseFloat(balanceCurrent);
        console.log(balanceCurrent, balanceCurrentNumber);

        // 5. Doing the subtraction. 
        const cashOutNewBalance = balanceCurrentNumber - cashOutInputNumber;
        console.log(cashOutNewBalance);

        // 6. Update the UI
        document.getElementById('account-balance').innerText = cashOutNewBalance;
    }
    else{
        alert('Please try Pin "1111"');
    }

});
*/