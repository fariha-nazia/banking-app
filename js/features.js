// console.log('feature.js is added');

/**
 * Task: when we click in Cash out btn it will open cash out form else by default it will show Add money form.
 * Step 1: Show the cash out form
 * Step 2: Show add money form
 * Step 3:
 * Step 4:
 * Step 5:
 */



// =======================================================================================================================
// =======================================================================================================================
// for add money btn and section show
document.getElementById('toggle-add-money-form').addEventListener('click', function(){

    console.log('feature add');
    showSectionById('add-money-form');
});

// for cash out btn and section show
document.getElementById('toggle-cash-out-form').addEventListener('click', function(){
    showSectionById('cash-out-form');
});

// for transaction btn and section show
document.getElementById('toggle-transaction-form').addEventListener('click', function(){
    showSectionById('transaction-form');
});



// =======================================================================================================================
// =======================================================================================================================



/* 
document.getElementById('toggle-cash-out-form').addEventListener('click', function(){
    // console.log('show cash out btn is working');

    // removing the hidden from cash out form when the btn(cash out) is clicked
    document.getElementById('cash-out-form').classList.remove('hidden');

    // removing the add money form when the btn(cash out) is clicked
    document.getElementById('add-money-form').classList.add('hidden');
});

// show add money form and hide the cash out form
document.getElementById('toggle-add-money-form').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');
});
*/