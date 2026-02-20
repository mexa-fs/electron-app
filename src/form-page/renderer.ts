import './form.css';

const backButton = document.getElementById('back-button');
backButton?.addEventListener('click', async () => {
   await window.api.openMain();
});

const form = document.getElementById('emailForm') as HTMLFormElement;
form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const toInput = document.getElementById('to') as HTMLInputElement;
  const subjectInput = document.getElementById('subject') as HTMLInputElement;
  const messageInput = document.getElementById('message') as HTMLTextAreaElement;

  const to_whom = toInput.value;
  const text_theme = subjectInput.value;
  const message = messageInput.value;

  await window.api.submitForm({ to_whom, text_theme, message });
  alert('Form submitted successfully!');
  form.reset();
});