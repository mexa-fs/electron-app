const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    submitForm: (formData) => ipcRenderer.invoke('submit-form', formData),
    openForm: () => ipcRenderer.invoke('open-form'),
    openMain: () => ipcRenderer.invoke('open-main'),
    openMessages: () => ipcRenderer.invoke('open-messages'),
    openInfo: () => ipcRenderer.invoke('open-info'),
    openPosts: () => ipcRenderer.invoke('open-posts'),
    createAddPostsPopUp: () => ipcRenderer.invoke('create-add-posts-pop-up'),
    closePopUp: () => ipcRenderer.invoke('close-pop-up'),
});