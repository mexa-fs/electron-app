const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const db = require('../database').default;

let postsWindow = null;

function createPostsWindow() {
  postsWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: POSTS_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  postsWindow.loadURL(POSTS_WINDOW_WEBPACK_ENTRY);

};

ipcMain.handle('add-post', async (event, postData) => {
  const { title, description } = postData;
  db.createPost(title, description);

  if(postsWindow) {
    postsWindow.webContents.send('post-updated');
  }
});

ipcMain.handle('get-posts', async () => {
    return db.getPosts();
});

ipcMain.handle('delete-posts', async () => {
    db.deletePosts();
});

export default createPostsWindow;