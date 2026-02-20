"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsWindow = void 0;
const electron_1 = require("electron");
const database_1 = __importDefault(require("../database"));
function createPostsWindow() {
    exports.postsWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: POSTS_WINDOW_PRELOAD_WEBPACK_ENTRY,
        },
    });
    exports.postsWindow.loadURL(POSTS_WINDOW_WEBPACK_ENTRY);
}
;
electron_1.ipcMain.handle('add-post', async (event, postData) => {
    database_1.default.createPost(postData);
    if (exports.postsWindow) {
        exports.postsWindow.webContents.send('post-updated');
    }
});
electron_1.ipcMain.handle('get-posts', async () => {
    return database_1.default.getPosts();
});
electron_1.ipcMain.handle('delete-posts', async () => {
    database_1.default.deletePosts();
});
exports.default = createPostsWindow;
//# sourceMappingURL=main.js.map