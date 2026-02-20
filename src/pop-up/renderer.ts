import { CreatePostDTO } from '../../utils/IPost';
import './pop-up.css';

const closePopUpButton = document.getElementById('close-pop-up');
closePopUpButton?.addEventListener('click', async () => {
    await window.api.closePopUp();
});

const addPostButton = document.getElementById('add-post');
if(addPostButton){
    addPostButton.addEventListener('click', async () => {
        const titleInput = document.getElementById('post-name') as HTMLInputElement;
        const descriptionInput = document.getElementById('post-desc') as HTMLTextAreaElement;
        const postData: CreatePostDTO = {
            title: titleInput.value,
            description: descriptionInput.value,
        };
        await window.api.addPost(postData);
        await window.api.closePopUp();
    });
}