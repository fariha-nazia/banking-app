console.log('home js connected');

// Add money
// step 1: add event listener.
document.getElementById('add-money-btn').addEventListener('click', function(event){

    // to check if the event listener is working or not
    console.log('btn add money clicked.');

    // step 2:fetch the input amount from add-money-input
    const addMoneyInput = document.getElementById('add-money-input').value;
    console.log(addMoneyInput);

    // step 3: fetch the pin from add-money-pin-input
    const addMoneyInputPin = document.getElementById('add-money-pin-input').value;
    console.log(addMoneyInputPin);

});