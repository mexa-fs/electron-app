import { BrowserWindow, ipcMain } from 'electron';
import db from '../database';

declare const MESSAGES_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
declare const MESSAGES_WINDOW_WEBPACK_ENTRY: string;

export let messagesWindow: BrowserWindow | null = null;

function createMessagesWindow() {
  messagesWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MESSAGES_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  messagesWindow.loadURL(MESSAGES_WINDOW_WEBPACK_ENTRY);
};

ipcMain.handle('get-messages', async () => {
    return db.getMessages();
});

ipcMain.handle('delete-messages', async () => {
    db.deleteMessages();
});

export default createMessagesWindow;