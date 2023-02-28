//Написати скрипт управління формою логіна.
const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };
  console.log(formData);

  if (formData.mail === '' || formData.password === '') {
    alert('Усі поля повинні бути заповнені!!!');
  }
  form.reset();

}