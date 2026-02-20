"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./info.css");
const backButton = document.getElementById('back-button');
backButton?.addEventListener('click', async () => {
    await window.api.openMain();
});
//# sourceMappingURL=renderer.js.map