import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
    openMain: () => ipcRenderer.invoke('open-main'),
    createAddPostsPopUp: () => ipcRenderer.invoke('create-add-posts-pop-up'),
    getPosts: () => ipcRenderer.invoke('get-posts'),
    onPostsUpdated: (callback: any) => ipcRenderer.on('post-updated', callback),
    deletePosts: () => ipcRenderer.invoke('delete-posts'),
});