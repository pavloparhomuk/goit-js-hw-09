const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

window.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = savedData ? JSON.parse(savedData) : {};
  form.elements.email.value = parsedData.email || '';
  form.elements.message.value = parsedData.message || '';
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
});

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  formData.email && formData.message
    ? (console.log(formData),
      form.reset(),
      localStorage.removeItem(STORAGE_KEY),
      (formData.email = ''),
      (formData.message = ''))
    : alert('Fill please all fields');
});
