import './form.css';

const backButton = document.getElementById('back-button');
backButton.addEventListener('click', async () => {
   await window.api.openMain();
});

const form = document.getElementById('emailForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const to_whom = document.getElementById('to').value;
  const text_theme = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  await window.api.submitForm({ to_whom, text_theme, message });
  alert('Form submitted successfully!');
  form.reset();
});