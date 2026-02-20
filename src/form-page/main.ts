import { BrowserWindow, ipcMain } from "electron";
import db from "../database";
import { IMessage } from "../../utils/IMessage";

declare const FORM_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
declare const FORM_WINDOW_WEBPACK_ENTRY: string;

export let formWindow: BrowserWindow | null = null;

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

ipcMain.handle('submit-form', async (event, formData: IMessage) => {
    db.createMessage(formData);
});

export default createFormWindow;