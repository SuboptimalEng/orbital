"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var isDev = require("electron-is-dev");
// const { app, BrowserWindow, protocol } = require('electron');
// const path = require('path');
// const isDev = require('electron-is-dev');
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 1600,
        height: 1200,
        // fullscreen: true,
        // NOTE: Disable vibrancy.
        // vibrancy: 'under-window',
        // visualEffectState: 'followWindow',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            webSecurity: true,
            allowRunningInsecureContent: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.loadURL(isDev
        ? 'http://localhost:3000'
        : "file://" + path.join(__dirname, '../../build/index.html'));
    if (isDev) {
        win.webContents.openDevTools();
    }
}
/* ================================================================ */
/* ================================================================ */
// const fs = require('fs');
var fs = require("fs");
// const ffmpeg = require('fluent-ffmpeg');
// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
// const ffprobePath = require('@ffprobe-installer/ffprobe').path;
// ffmpeg.setFfmpegPath(ffmpegPath.replace('app.asar', 'app.asar.unpacked'));
// ffmpeg.setFfprobePath(ffprobePath.replace('app.asar', 'app.asar.unpacked'));
var _a = require('electron'), ipcMain = _a.ipcMain, dialog = _a.dialog;
ipcMain.on('test', function (event, payload) {
    // ffmpeg('/Users/suboptimaleng/Desktop/orb/steve_jobs_demo.mp4').screenshots({
    //   count: 1,
    //   filename: 'abc.jpg',
    //   folder: '/Users/suboptimaleng/Desktop/orb/',
    // });
    event.reply('test', { from: 'main.js' });
});
ipcMain.on('select-dirs', function (event, payload) { return __awaiter(void 0, void 0, void 0, function () {
    var result, files_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dialog.showOpenDialog(win, {
                    properties: ['openDirectory']
                })];
            case 1:
                result = _a.sent();
                if (result.canceled) {
                    event.reply('select-dirs', {
                        path: '',
                        files: []
                    });
                }
                else {
                    files_1 = [];
                    fs.readdirSync(result.filePaths[0]).forEach(function (filename) {
                        var fullFilePath = result.filePaths[0] + "/" + filename;
                        // TODO: Allow user to filter through multiple file types.
                        if (fs.statSync(fullFilePath).isFile() &&
                            path.extname(fullFilePath) === '.mp4') {
                            files_1.push({
                                name: filename,
                                path: fullFilePath
                            });
                        }
                    });
                    event.reply('select-dirs', {
                        path: result.filePaths[0],
                        files: files_1
                    });
                }
                return [2 /*return*/];
        }
    });
}); });
/* ================================================================ */
/* ================================================================ */
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.whenReady().then(function () {
    createWindow();
    // SN: Register file protocol to work in dev mode.
    // NOTE: Works live because app asks for user permission.
    electron_1.protocol.registerFileProtocol('file-protocol', function (request, callback) {
        // NOTE: Maybe leave this in for debugging?
        // console.log(request);
        var url = decodeURIComponent(request.url.replace('file-protocol://getMediaFile/', ''));
        try {
            return callback(url);
        }
        catch (e) {
            console.error(e);
            return callback('404');
        }
    });
    electron_1.app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
