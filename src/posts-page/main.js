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