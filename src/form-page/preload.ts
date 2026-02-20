import { contextBridge, ipcRenderer } from 'electron';
import { CreateMessageDTO } from '../../utils/IMessage';

contextBridge.exposeInMainWorld('api', {
    submitForm: (formData: CreateMessageDTO) => ipcRenderer.invoke('submit-form', formData),
    openMain: () => ipcRenderer.invoke('open-main'),
});