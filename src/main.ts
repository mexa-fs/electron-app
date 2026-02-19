import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import db from './database';
import createMainWndow  from './main-page/main';

let mainWindow: any;

// ipcMain.handle('close-pop-up', (event) => {
//   addPostsPopUp.close();
//   addPostsPopUp = null;
// });

//ЗАПУСК ПРИЛОЖЕНИЯ
app.whenReady().then(async () => {
    await db.getRealm();
    mainWindow = createMainWndow();
}); 