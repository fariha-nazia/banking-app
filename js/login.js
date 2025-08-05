// console.log('JS file for clicking button added');


// Step 1
// by this line of code you are calling the ID from document and making changes. This an example o0f DOM manipulation. 
    document.getElementById('login-btn').addEventListener('click', function(){
    // console.log('login btn clicked');

    // step 2
    // adding eventlistener to the phone number so that it fetches the phone number.
    const loginPhoneNumber = document.getElementById('login-phone-number').value;

    // Step 3
    // adding event listener to handel pin number
    const loginPin = document.getElementById('login-pin').value;

    // to check the output when btn clicked
    // console.log(loginPhoneNumber,loginPin);

    // Step 4 - validation of phone and pin number.
    // setting the phone num and pass - this way is temporary and not at all a good way.
    if(loginPhoneNumber === '4991' && loginPin === '1111'){
        console.log('Login successful');

        // step 5 
        // if login is correct than go to a new page.
        window.location.href = 'banking-app/home.html'; 
    }
    else{
    alert('Please type Phone No. 4991 and Pin No. 1111');
    }


});
 
 

/* // doing the same thing again
document.getElementById('login-btn').addEventListener('click', function(){
    // console.log('btn is clicked');

    // fetch Phone No and Pin from the input filed.
    const loginPhoneNumber = document.getElementById('login-phone-number').value;
    const loginPin = document.getElementById('login-pin').value;
    
    // check if its working
    console.log(loginPhoneNumber, loginPin);

    // validating in a bad way.
    if(loginPhoneNumber === '4991' && loginPin === '1111'){
        console.log('login successful');

        // 
    }
    else{
        alert('Please type Phone No. 4991 and Pin No. 1111')
    }

}); */
