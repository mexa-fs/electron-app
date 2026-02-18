import './posts.css';

const backButton = document.getElementById('back-button');
backButton.addEventListener('click', async () => {
   await window.api.openMain();
});

const addPostButton = document.getElementById('add-button');
addPostButton.addEventListener('click', async () => {
    await window.api.createAddPostsPopUp();
});

async function loadPosts() {
    const posts = await window.api.getPosts();
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = post.description;

        postElement.appendChild(titleElement);
        postElement.appendChild(descriptionElement);
        postsContainer.appendChild(postElement);
    });
}

loadPosts();
