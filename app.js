// Variables
const submit_btn = document.querySelector('#submit');

const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

let IsFirstNameValid = true;
let IsLastNameValid = true;
let IsEmailValid = true;
let IsPasswordValid = true;

// Check fields


const checkFirstName = () => {
  const error = document.getElementById('first_name_error');
  

  if (firstName.value === '') {
    firstName.style.borderColor = 'hsl(0, 100%, 74%)';

    error.classList.remove('error');
    error.classList.add('error_active');

    IsFirstNameValid = false;
  } else {
    firstName.style.borderColor = 'hsl(154, 59%, 51%)';

    error.classList.add('error');
    error.classList.remove('error_active');

    IsFirstNameValid = true;
  }

  return IsFirstNameValid;
};

const checkLastName = () => {
  const error = document.getElementById('last_name_error');


  if (lastName.value === '') {
    lastName.style.borderColor = 'hsl(0, 100%, 74%)';

    error.classList.remove('error');
    error.classList.add('error_active');

    IsLastNameValid = false;
  } else {
    lastName.style.borderColor = 'hsl(154, 59%, 51%)';

    error.classList.add('error');
    error.classList.remove('error_active');

    IsLastNameValid = true;
  }

  return IsLastNameValid;
};

const checkEmail = () => {
  const error = document.getElementById('email_error');

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const isValidEmail = emailRegex.test(email.value);

  if (email.value === '' || !isValidEmail) {
    email.style.borderColor = 'hsl(0, 100%, 74%)';

    error.classList.remove('error');
    error.classList.add('error_active');

    IsEmailValid = false;
  } else {
    email.style.borderColor = 'hsl(154, 59%, 51%)';

    error.classList.add('error');
    error.classList.remove('error_active');

    IsEmailValid = true;
  }

  return IsEmailValid;
};

const checkPassword = () => {
  const error = document.getElementById('password_error');

  if (password.value === '') {
    password.style.borderColor = 'hsl(0, 100%, 74%)';

    error.classList.remove('error');
    error.classList.add('error_active');
    
    IsPasswordValid = false;
  } else {
    password.style.borderColor = 'hsl(154, 59%, 51%)';

    error.classList.add('error');
    error.classList.remove('error_active');

    IsPasswordValid = true;
  }

  return IsPasswordValid
};


// Clear fields after form validates

const clearFields = () => {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  password.value = '';
};

// on submit

submit_btn.addEventListener('click', (e) => {
  e.preventDefault();

  checkFirstName()
  checkLastName();
  checkEmail();
  checkPassword();

  if (IsFirstNameValid && IsLastNameValid && IsEmailValid && IsPasswordValid) {
    const form = document.querySelector('form');
    form.submit();

    clearFields();
  }
});
    
    
