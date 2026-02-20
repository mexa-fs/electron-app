import { CreatePostDTO } from "../../utils/IPost";

import  { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
    closePopUp: () => ipcRenderer.invoke('close-pop-up'),
    addPost: (postData: CreatePostDTO) => ipcRenderer.invoke('add-post', postData),
});