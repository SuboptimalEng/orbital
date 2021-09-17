import { contextBridge, ipcRenderer } from 'electron';
// const { contextBridge, ipcRenderer } = require('electron');

const validOnChannels = ['test', 'open-directory'];
const validSendChannels = ['test', 'open-directory'];

contextBridge.exposeInMainWorld('ipc', {
  send: (channel: string, data: any) => {
    console.log(channel, data);
    if (validSendChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  on: (channel: string, func: any) => {
    if (validOnChannels.includes(channel)) {
      // Strip event as it includes `sender` and is a security risk
      ipcRenderer.on(channel, (event: any, ...args: any) => {
        func(...args);
      });
    }
  },
});
