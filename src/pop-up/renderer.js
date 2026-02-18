import './pop-up.css';

const closePopUpButton = document.getElementById('close-pop-up');
closePopUpButton.addEventListener('click', async () => {
    await window.api.closePopUp();
});

const addPostButton = document.getElementById('add-post');
addPostButton.addEventListener('click', async () => {
    const titleInput = document.getElementById('post-name');
    const descriptionInput = document.getElementById('post-desc');
    const postData = {
        title: titleInput.value,
        description: descriptionInput.value,
    };
    await window.api.addPost(postData);
    await window.api.closePopUp();
});