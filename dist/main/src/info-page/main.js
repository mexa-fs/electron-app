"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoWindow = void 0;
const electron_1 = require("electron");
exports.infoWindow = null;
function createInfoWindow() {
    exports.infoWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: INFO_WINDOW_PRELOAD_WEBPACK_ENTRY,
        },
    });
    exports.infoWindow.loadURL(INFO_WINDOW_WEBPACK_ENTRY);
}
;
exports.default = createInfoWindow;
//# sourceMappingURL=main.js.map