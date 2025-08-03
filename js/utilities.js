// console.log('utilities is working');
/**
 * Building a common function for Input of any amount from user.
 * In this case doesn't matter which amount it is, it will look into any ID and and fetch value. 
 *  */

function getInputFieldValueById(id){

    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
};


/**
 * This function will take text from input field -- used basically for fetching the current balance 
*/

function getTextFieldValueById(id){

    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
};

/**
 * this function will show the section when clicked in certain btn.
  */

function showSectionById(id){

    // Step 1: Hide all the sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');

    // Step 2: show the section when the ID is called.
    document.getElementById(id).classList.remove('hidden');

};