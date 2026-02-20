"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('api', {
    openMain: () => electron_1.ipcRenderer.invoke('open-main'),
    getMessages: () => electron_1.ipcRenderer.invoke('get-messages'),
    deleteMessages: () => electron_1.ipcRenderer.invoke('delete-messages'),
});
//# sourceMappingURL=preload.js.map