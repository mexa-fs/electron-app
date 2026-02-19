const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const db = require('../database').default;

let formWindow = null;

function createFormWindow() {
  formWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: FORM_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  formWindow.loadURL(FORM_WINDOW_WEBPACK_ENTRY);
};

ipcMain.handle('submit-form', async (event, formData) => {
    const { to_whom, text_theme, message } = formData;
    db.createMessage(to_whom, text_theme, message);
});

export default createFormWindow;