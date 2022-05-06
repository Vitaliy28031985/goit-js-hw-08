
import throttle from 'lodash.throttle';

const refs = {
   form: document.querySelector('.feedback-form'),
   email: document.querySelector('.feedback-form input'),
   message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onForm, 500));
refs.form.addEventListener('submit', onSubmit);

const formContainer = {};

function onForm(e) {
  const value = e.target.value;
  formContainer[e.target.name] = value;
  // formContainer[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formContainer));
}

function onSubmit(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  e.target.reset();
  formContainer[e.target.name] = '';
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
   refs.email.value = data.email;
   refs.message.value = data.message;
  }
})();