import { contextBridge, ipcRenderer } from 'electron';

const validSendChannels = [
  'open-file',
  'open-external',
  'open-directory',
  'update-settings',
  'load-settings',
];

const validOnChannels = ['open-directory', 'load-settings'];

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
  // NOTE: Adding a remove event listener.
  // NOTE: https://github.com/reZach/secure-electron-template/issues/43
  removeAllListeners: (channel: string) => {
    if (validOnChannels.includes(channel)) {
      ipcRenderer.removeAllListeners(channel);
    }
  },
});
