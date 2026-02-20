import { app, BrowserWindow, ipcMain } from 'electron';
import { postsWindow } from '../posts-page/main';

declare const ADD_POSTS_POP_UP_PRELOAD_WEBPACK_ENTRY: string;
declare const ADD_POSTS_POP_UP_WEBPACK_ENTRY: string;

export let addPostsPopUp: BrowserWindow | null = null;

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

ipcMain.handle('close-pop-up', async (event) => {
  addPostsPopUp?.close();
  addPostsPopUp = null;
});

export default createAddPostsPopUp;