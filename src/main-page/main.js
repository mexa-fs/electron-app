const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const db = require('../database');
const createFormWindow = require('../form-page/main').default;
const createMessagesWindow = require('../message-page/main').default;
const createInfoWindow = require('../info-page/main').default;
const createPostsWindow = require('../posts-page/main').default;

let mainWindow = null;
let formWindow = null;
let messagesWindow = null;
let infoWindow = null;
let postsWindow = null;
let addPostsPopUp = null;

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
  
    mainWindow.close();
    formWindow.show();
  });
  
  ipcMain.handle('open-main', (event) => {
    createMainWindow();
  
    mainWindow.show();
    formWindow.hide();
  });
  
  ipcMain.handle('open-messages', (event) => {
    createMessagesWindow();
  
    mainWindow.close();
    messagesWindow.show();
  });
  
  ipcMain.handle('open-info', (event) => {
    createInfoWindow();
  
    mainWindow.close();
    infoWindow.show();
  });
  
  ipcMain.handle('open-posts', (event) => {
    createPostsWindow();
  
    mainWindow.close();
    postsWindow.show();
  });

export default createMainWindow;