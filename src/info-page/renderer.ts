import './info.css';

const backButton = document.getElementById('back-button');
backButton?.addEventListener('click', async () => {
   await window.api.openMain();
});