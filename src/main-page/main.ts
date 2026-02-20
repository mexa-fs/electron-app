import { app, BrowserWindow, ipcMain  } from "electron";
import db from "../database";
import createFormWindow, { formWindow } from "../form-page/main";
import createMessagesWindow, { messagesWindow } from "../message-page/main";
import createInfoWindow, {infoWindow} from "../info-page/main";
import createPostsWindow, {postsWindow} from "../posts-page/main";

declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

export let mainWindow: BrowserWindow | null = null;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

ipcMain.handle('open-form', (event) => {
    createFormWindow();
  
    mainWindow?.close();
    formWindow?.show();
  });
  
  ipcMain.handle('open-main', (event) => {
    createMainWindow();
  
    mainWindow?.show();
    formWindow?.hide();
  });
  
  ipcMain.handle('open-messages', (event) => {
    createMessagesWindow();
  
    mainWindow?.close();
    messagesWindow?.show();
  });
  
  ipcMain.handle('open-info', (event) => {
    createInfoWindow();
  
    mainWindow?.close();
    infoWindow?.show();
  });
  
  ipcMain.handle('open-posts', (event) => {
    createPostsWindow();
  
    mainWindow?.close();
    postsWindow?.show();
  });

export default createMainWindow;