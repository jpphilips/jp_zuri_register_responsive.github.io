// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.

const form  = document.getElementsByTagName('form')[0];

const fname = document.getElementById('fname');
const fnameError = document.querySelector('#fname + span.error');

const lname = document.getElementById('lname');
const lnameError = document.querySelector('#lname + span.error')

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error')

const pword = document.getElementById('pword');
const pwordError = document.querySelector('#pword + span.error')


// email.addEventListener('input', function (event) {
//   // Each time the user types something, we check if the
//   // form fields are valid.

//   if (email.validity.valid) {
//     // In case there is an error message visible, if the field
//     // is valid, we remove the error message.
//     emailError.textContent = ''; // Reset the content of the message
//     emailError.className = 'error'; // Reset the visual state of the message
//   } else {
//     // If there is still an error, show the correct error
//     showError();
//   }
// });

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit


  if(!fname.validity.valid || !lname.validity.valid || !email.validity.valid || !pword.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
    if(fname.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    fnameError.textContent = 'First Name cannot be empty';
    }

    if(lname.validity.valueMissing) {
    lnameError.textContent = 'Last Name cannot be empty';
    }

    if(email.validity.valueMissing) {
    emailError.textContent = 'Email Address cannot be empty';
    }else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Looks like this is not an email';
    }

    if(pword.validity.valueMissing) {
    pwordError.textContent = 'Password cannot be empty';
    }

  // Set the styling appropriately
//   fnameError.className = 'error active';
}
