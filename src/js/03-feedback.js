import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const feedbackFormState = {
  email: form.elements.email.value,
  message: form.elements.message.value,
};
window.addEventListener('load', () => {
  console.log(feedbackFormState.email);
  if (
    JSON.parse(localStorage.getItem(STORAGE_KEY)).email === '' &&
    JSON.parse(localStorage.getItem(STORAGE_KEY)).message === ''
  ) {
    return;
  }
  form.elements.email.value = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  ).email;
  feedbackFormState.email = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
  form.elements.message.value = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  ).message;
  feedbackFormState.message = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  ).message;
});
form.addEventListener(
  'input',
  throttle(evt => {
    if (evt.target.type === 'email') {
      feedbackFormState.email = evt.target.value;
    } else {
      feedbackFormState.message = evt.target.value;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
  }, 500)
);
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(feedbackFormState);
  e.currentTarget.reset();
  feedbackFormState.email = form.elements.email.value;
  feedbackFormState.message = form.elements.message.value;
  localStorage.removeItem(STORAGE_KEY);
});
