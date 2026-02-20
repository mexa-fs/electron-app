import { BrowserWindow } from "electron";

declare const INFO_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
declare const INFO_WINDOW_WEBPACK_ENTRY: string;

export let infoWindow: BrowserWindow | null = null;

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