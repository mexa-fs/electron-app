import { BrowserWindow, ipcMain } from "electron";
import db from '../database';
import { IPost } from "../../utils/IPost";
import createAddPostsPopUp, { addPostsPopUp } from "../pop-up/main";

declare const POSTS_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
declare const POSTS_WINDOW_WEBPACK_ENTRY: string;

export let postsWindow: BrowserWindow | undefined;

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

ipcMain.handle('create-add-posts-pop-up', async () => {
  createAddPostsPopUp();

  addPostsPopUp?.show();
});

ipcMain.handle('add-post', async (event, postData: IPost) => {
  db.createPost(postData);

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