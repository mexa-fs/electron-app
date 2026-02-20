"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./messages.css");
const backButton = document.getElementById('back-button');
backButton?.addEventListener('click', async () => {
    await window.api.openMain();
});
const messagesList = document.getElementById('messages-list');
async function getMessages() {
    const messages = await window.api.getMessages();
    if (messagesList) {
        messagesList.innerText = messages.length === 0 ? 'Пока сообщений нет.' : '';
        messages.forEach(msg => {
            const listItem = document.createElement('li');
            listItem.textContent = `To: ${msg.to_whom}, Subject: ${msg.text_theme}, Message: ${msg.message}`;
            messagesList.appendChild(listItem);
        });
    }
}
;
getMessages();
const deleteButton = document.getElementById('delete-button');
deleteButton?.addEventListener('click', async () => {
    await window.api.deleteMessages();
    getMessages();
});
//# sourceMappingURL=renderer.js.map