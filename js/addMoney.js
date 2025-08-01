/* 
* Task: You want to add an amount to the current balance and display the updated balance.
* Steps:
* 1. Put Id so that we can call 
* 2. Build the function so that it performs certain task.
* 3. add event listener.
* 4. fetch the value
* 5. do validation
* 6. display the updated value

How the sequence works:
1st. You will add a event listener
     Add event listener in the btn
2nd. you will take input of the pin and verify if its correct or not
3rd. Take the input amount from the user
4th. if the pin is correct then convert the value (which we took from user) in parsFloat
5th. Add the value (Addition)
6th. Display the value
*/

// adding the event listener
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('on click btn must work')

    // get money and the pin from user
    // 1. fetching the amount
    const addMoneyInput = document.getElementById('add-money-input').value;
    // 1.1 converting the number to float
    const addMoneyInputNumber = parseFloat(addMoneyInput);

    // 2. fetching the pin
    const addMoneyInputPin = document.getElementById('add-money-pin-input').value;

    console.log(addMoneyInput, addMoneyInputPin);

    // Validation of the pin -- this way of validation is not good
    if(addMoneyInputPin === '1111'){
        // fetching the current balance
        const currentBalance = document.getElementById('account-balance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        // console.log(currentBalance, currentBalanceNumber);

        // new balance
        const newBalance = addMoneyInputNumber + currentBalanceNumber;
        console.log(newBalance);

        // showing the updated balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Please Try Pin 1111');
    }
});


