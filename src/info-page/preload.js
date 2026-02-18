const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    openMain: () => ipcRenderer.invoke('open-main'),
});