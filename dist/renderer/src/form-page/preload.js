"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('api', {
    submitForm: (formData) => electron_1.ipcRenderer.invoke('submit-form', formData),
    openMain: () => electron_1.ipcRenderer.invoke('open-main'),
});
//# sourceMappingURL=preload.js.map