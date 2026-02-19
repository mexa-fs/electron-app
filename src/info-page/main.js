const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const db = require('../database');

let infoWindow = null;

function createInfoWindow() {
  infoWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: INFO_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  infoWindow.loadURL(INFO_WINDOW_WEBPACK_ENTRY);
};

export default createInfoWindow;