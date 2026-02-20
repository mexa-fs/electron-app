"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('api', {
    openForm: () => electron_1.ipcRenderer.invoke('open-form'),
    openMain: () => electron_1.ipcRenderer.invoke('open-main'),
    openMessages: () => electron_1.ipcRenderer.invoke('open-messages'),
    openInfo: () => electron_1.ipcRenderer.invoke('open-info'),
    openPosts: () => electron_1.ipcRenderer.invoke('open-posts'),
    createAddPostsPopUp: () => electron_1.ipcRenderer.invoke('create-add-posts-pop-up'),
    closePopUp: () => electron_1.ipcRenderer.invoke('close-pop-up'),
});
//# sourceMappingURL=preload.js.map