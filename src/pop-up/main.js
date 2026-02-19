const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const db = require('../database');

let addPostsPopUp = null;

function createAddPostsPopUp() {
  addPostsPopUp = new BrowserWindow({
    width: 400,
    height: 300,
    parent: postsWindow,
    modal: true,
    webPreferences: {
      preload: ADD_POSTS_POP_UP_PRELOAD_WEBPACK_ENTRY,
    },
  });

  addPostsPopUp.loadURL(ADD_POSTS_POP_UP_WEBPACK_ENTRY);
};

 ipcMain.handle('create-add-posts-pop-up', (event) => {
  createAddPostsPopUp();

  addPostsPopUp.show();
});

export default createAddPostsPopUp;