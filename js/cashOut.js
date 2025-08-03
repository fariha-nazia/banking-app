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