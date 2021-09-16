"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
// const { contextBridge, ipcRenderer } = require('electron');
var validOnChannels = ['test', 'select-dirs'];
var validSendChannels = ['test', 'select-dirs'];
electron_1.contextBridge.exposeInMainWorld('ipc', {
    send: function (channel, data) {
        console.log(channel, data);
        if (validSendChannels.includes(channel)) {
            electron_1.ipcRenderer.send(channel, data);
        }
    },
    on: function (channel, func) {
        if (validOnChannels.includes(channel)) {
            // Strip event as it includes `sender` and is a security risk
            electron_1.ipcRenderer.on(channel, function (event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                func.apply(void 0, args);
            });
        }
    }
});
