"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./posts.css");
const backButton = document.getElementById('back-button');
backButton?.addEventListener('click', async () => {
    await window.api.openMain();
});
const addPostButton = document.getElementById('add-button');
addPostButton?.addEventListener('click', async () => {
    await window.api.createAddPostsPopUp();
});
const postsList = document.getElementById('post-list');
async function getPosts() {
    const posts = await window.api.getPosts();
    if (postsList) {
        postsList.innerText = posts.length === 0 ? 'Пока постов нет.' : '';
        posts.forEach(post => {
            const postItem = document.createElement('p');
            postItem.textContent = `Title: ${post.title}, Description: ${post.description}`;
            postsList.appendChild(postItem);
        });
    }
}
;
const deleteButton = document.getElementById('delete-button');
deleteButton?.addEventListener('click', async () => {
    await window.api.deletePosts();
    getPosts();
});
window.api.onPostsUpdated(() => {
    getPosts();
});
//# sourceMappingURL=renderer.js.map