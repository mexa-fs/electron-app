"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formWindow = void 0;
const electron_1 = require("electron");
const database_1 = __importDefault(require("../database"));
exports.formWindow = null;
function createFormWindow() {
    exports.formWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: FORM_WINDOW_PRELOAD_WEBPACK_ENTRY,
        },
    });
    exports.formWindow.loadURL(FORM_WINDOW_WEBPACK_ENTRY);
}
;
electron_1.ipcMain.handle('submit-form', async (event, formData) => {
    database_1.default.createMessage(formData);
});
exports.default = createFormWindow;
//# sourceMappingURL=main.js.map