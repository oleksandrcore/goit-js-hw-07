const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (email && password) {
    const formData = {
      email: email,
      password: email
    };

    console.log(formData);
    loginForm.reset();
  } else {
    alert('All form fields must be filled in');
  }
});
