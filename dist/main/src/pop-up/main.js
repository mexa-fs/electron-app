"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPostsPopUp = void 0;
const electron_1 = require("electron");
const main_1 = require("../posts-page/main");
exports.addPostsPopUp = null;
function createAddPostsPopUp() {
    exports.addPostsPopUp = new electron_1.BrowserWindow({
        width: 400,
        height: 300,
        parent: main_1.postsWindow,
        modal: true,
        webPreferences: {
            preload: ADD_POSTS_POP_UP_PRELOAD_WEBPACK_ENTRY,
        },
    });
    exports.addPostsPopUp.loadURL(ADD_POSTS_POP_UP_WEBPACK_ENTRY);
}
;
electron_1.ipcMain.handle('create-add-posts-pop-up', (event) => {
    createAddPostsPopUp();
    exports.addPostsPopUp?.show();
});
exports.default = createAddPostsPopUp;
//# sourceMappingURL=main.js.map