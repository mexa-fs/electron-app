const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const db = require('../database');

//ИНЦИЦИАЛИЗАЦИЯ ОКОН ПРИЛОЖЕНИЯ
let mainWindow;
let formWindow;
let messagesWindow;
let infoWindow;
let postsWindow;
let addPostsPopUp;

//ФУНКЦИИ ДЛЯ СОЗДАНИЯ ОКОН
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
}

function createFormWindow() {
  formWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: FORM_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  formWindow.loadURL(FORM_WINDOW_WEBPACK_ENTRY);
}

function createMessagesWindow() {
  messagesWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MESSAGES_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  messagesWindow.loadURL(MESSAGES_WINDOW_WEBPACK_ENTRY);
}

function createInfoWindow() {
  infoWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: INFO_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  infoWindow.loadURL(INFO_WINDOW_WEBPACK_ENTRY);
}

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

//ОБРАБОТКА СОБЫТИЙ ОТ РЕНДЕРЕРОВ
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

ipcMain.handle('submit-form', async (event, formData) => {
    const { to_whom, text_theme, message } = formData;
    db.createMessage(to_whom, text_theme, message);
});

ipcMain.handle('create-add-posts-pop-up', (event) => {
  createAddPostsPopUp();

  addPostsPopUp.show();
});

ipcMain.handle('close-pop-up', (event) => {
  addPostsPopUp.close();
  addPostsPopUp = null;
});

ipcMain.handle('get-messages', async () => {
    return db.getMessages();
});

ipcMain.handle('delete-messages', async () => {
    db.deleteMessages();
});

ipcMain.handle('get-posts', async () => {
    return db.getPosts();
});

ipcMain.handle('delete-posts', async () => {
    db.deletePosts();
});

//ЗАПУСК ПРИЛОЖЕНИЯ
app.whenReady().then(async () => {
    await db.getRealm();
    createMainWindow();
}); 