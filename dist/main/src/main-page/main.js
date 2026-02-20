"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const main_1 = __importStar(require("../form-page/main"));
const main_2 = __importStar(require("../message-page/main"));
const main_3 = __importStar(require("../info-page/main"));
const main_4 = __importStar(require("../posts-page/main"));
let mainWindow = null;
function createMainWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        },
    });
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
}
;
electron_1.ipcMain.handle('open-form', (event) => {
    (0, main_1.default)();
    mainWindow?.close();
    main_1.formWindow?.show();
});
electron_1.ipcMain.handle('open-main', (event) => {
    createMainWindow();
    mainWindow?.show();
    main_1.formWindow?.hide();
});
electron_1.ipcMain.handle('open-messages', (event) => {
    (0, main_2.default)();
    mainWindow?.close();
    main_2.messagesWindow?.show();
});
electron_1.ipcMain.handle('open-info', (event) => {
    (0, main_3.default)();
    mainWindow?.close();
    main_3.infoWindow?.show();
});
electron_1.ipcMain.handle('open-posts', (event) => {
    (0, main_4.default)();
    mainWindow?.close();
    main_4.postsWindow?.show();
});
exports.default = createMainWindow;
//# sourceMappingURL=main.js.map