const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const db = require('../../database');

ipcMain.handle('open-main', (event) => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        },
    });

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
});

ipcMain.handle('submit-form', async (event, formData) => {
    const { to_whom, text_theme, message } = formData;
    db.createMessage(to_whom, text_theme, message);
});

const createFormWindow = () => {
  const formWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: FORM_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  formWindow.loadURL(FORM_WINDOW_WEBPACK_ENTRY);
};

app.whenReady().then(async () => {
    await db.getRealm();
    createFormWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});