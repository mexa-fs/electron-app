"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const database_1 = __importDefault(require("./database"));
const main_1 = __importDefault(require("./main-page/main"));
let mainWindow;
// ipcMain.handle('close-pop-up', (event) => {
//   addPostsPopUp.close();
//   addPostsPopUp = null;
// });
//ЗАПУСК ПРИЛОЖЕНИЯ
electron_1.app.whenReady().then(async () => {
    await database_1.default.getRealm();
    mainWindow = (0, main_1.default)();
});
//# sourceMappingURL=main.js.map