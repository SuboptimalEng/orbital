// import { contextBridge, ipcRenderer } from 'electron';
const { contextBridge, ipcRenderer } = require('electron');

const validOnChannels = ['test', 'select-dirs'];
const validSendChannels = ['test', 'select-dirs'];

contextBridge.exposeInMainWorld('ipc', {
  send: (channel, data) => {
    console.log(channel, data);
    if (validSendChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  on: (channel, func) => {
    if (validOnChannels.includes(channel)) {
      // Strip event as it includes `sender` and is a security risk
      ipcRenderer.on(channel, (event, ...args) => {
        func(...args);
      });
    }
  },
});
