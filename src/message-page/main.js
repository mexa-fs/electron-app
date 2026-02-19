const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const db = require('../database').default;

let messagesWindow = null;

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