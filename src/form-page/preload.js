const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    submitForm: (formData) => ipcRenderer.invoke('submit-form', formData),
    openMain: () => ipcRenderer.invoke('open-main'),
});