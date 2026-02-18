import './pop-up.css';

const closePopUpButton = document.getElementById('close-pop-up');
closePopUpButton.addEventListener('click', async () => {
    await window.api.closePopUp();
});