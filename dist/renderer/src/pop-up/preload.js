"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('api', {
    closePopUp: () => ipcRenderer.invoke('close-pop-up'),
    addPost: (postData) => ipcRenderer.invoke('add-post', postData),
});
//# sourceMappingURL=preload.js.map