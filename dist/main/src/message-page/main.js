"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesWindow = void 0;
const electron_1 = require("electron");
const database_1 = __importDefault(require("../database"));
exports.messagesWindow = null;
function createMessagesWindow() {
    exports.messagesWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: MESSAGES_WINDOW_PRELOAD_WEBPACK_ENTRY,
        },
    });
    exports.messagesWindow.loadURL(MESSAGES_WINDOW_WEBPACK_ENTRY);
}
;
electron_1.ipcMain.handle('get-messages', async () => {
    return database_1.default.getMessages();
});
electron_1.ipcMain.handle('delete-messages', async () => {
    database_1.default.deleteMessages();
});
exports.default = createMessagesWindow;
//# sourceMappingURL=main.js.map