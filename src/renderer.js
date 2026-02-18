import './index.css';

const letterButton = document.getElementById('letter-button');
letterButton.addEventListener('click', async () => {
  await window.api.openForm();
});

const messagesButton = document.getElementById('messages-button');
messagesButton.addEventListener('click', async () => {
  await window.api.openMessages();
});

const infoButton = document.getElementById('info-button');
infoButton.addEventListener('click', async () => {
  await window.api.openInfo();
});

const postsButton = document.getElementById('posts-button');
postsButton.addEventListener('click', async () => {
  await window.api.openPosts();
});