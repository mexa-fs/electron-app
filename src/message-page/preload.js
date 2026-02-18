const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    openMain: () => ipcRenderer.invoke('open-main'),
    getMessages: () => ipcRenderer.invoke('get-messages'),
    deleteMessages: () => ipcRenderer.invoke('delete-messages'),
});