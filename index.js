const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('gender');
const dateInput = document.getElementById('date');
const colorInput = document.getElementById('color');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  resetErrors();

  if (!nameInput.value) {
    showError('name', 'Please enter your name');
  }

  if (!emailInput.value) {
    showError('email', 'Please enter your email');
  } else if (!isValidEmail(emailInput.value)) {
    showError('email', 'Please enter a valid email address');
  }

  if (!phoneInput.value) {
    showError('phone', 'Please enter your phone number');
  } else if (!isValidPhoneNumber(phoneInput.value)) {
    showError('phone', 'Please enter a valid phone number');
  }

  if (!passwordInput.value) {
    showError('password', 'Please enter a password');
  } else if (passwordInput.value.length < 6) {
    showError('password', 'Password must be at least 6 characters long');
  }

  if (!ageInput.value) {
    showError('age', 'Please enter your age');
  } else if (ageInput.value < 1 || ageInput.value > 120) {
    showError('age', 'Please enter a valid age');
  }

  if (!genderInput.value) {
    showError('gender', 'Please select your gender');
  }

  if (!dateInput.value) {
    showError('date', 'Please enter a date');
  }

  if (!colorInput.value) {
    showError('color', 'Please select a color');
  }
}

function showError(fieldId, errorMessage) {
  const errorElement = document.getElementById(`${fieldId}Error`);
  errorElement.textContent = errorMessage;
}

function resetErrors() {
  const errorElements = document.getElementsByClassName('error-message');
  Array.from(errorElements).forEach(function (element) {
    element.textContent = '';
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
