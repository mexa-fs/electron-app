import { app } from 'electron';
import db from './database';
import createMainWndow  from './main-page/main';

let mainWindow: any;

app.whenReady().then(async () => {
    await db.getRealm();
    mainWindow = createMainWndow();
}); 