import { add } from './add';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import { app, BrowserWindow, protocol, shell } from 'electron';

let win: any;
function createWindow() {
  win = new BrowserWindow({
    width: 2000,
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
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../../build/index.html')}`
  );

  if (isDev) {
    win.webContents.openDevTools();
  }
}

/* ================================================================ */
/* ================================================================ */

import * as fs from 'fs';
import { glob } from 'glob';

import { IFile } from '../renderer/types';
import { allFileExtensions } from '../common/mediaExtensions';

// const ffmpeg = require('fluent-ffmpeg');
// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
// const ffprobePath = require('@ffprobe-installer/ffprobe').path;
// ffmpeg.setFfmpegPath(ffmpegPath.replace('app.asar', 'app.asar.unpacked'));
// ffmpeg.setFfprobePath(ffprobePath.replace('app.asar', 'app.asar.unpacked'));
// ffmpeg('/Users/suboptimaleng/Desktop/orb/steve_jobs_demo.mp4').screenshots({
//   count: 1,
//   filename: 'abc.jpg',
//   folder: '/Users/suboptimaleng/Desktop/orb/',
// });

import { ipcMain, dialog } from 'electron';
const Store = require('electron-store');
const store = new Store();

ipcMain.on('update-settings', (event, payload) => {
  store.set('themeName', payload.themeName);
  store.set('numOfFilesToLoad', payload.numOfFilesToLoad);
});

ipcMain.on('load-settings', (event, payload) => {
  event.reply('load-settings', {
    themeName: store.get('themeName'),
    numOfFilesToLoad: store.get('numOfFilesToLoad'),
  });
});

ipcMain.on('open-external', (event, payload) => {
  shell.openExternal(payload.url);
});

ipcMain.on('open-file', (event, payload) => {
  shell.openPath(payload.path);
});

ipcMain.on('start-drag', (event, payload) => {
  // NOTE: Drag files out of Orbital and into other apps.
  // NOTE: https://github.com/electron/electron/issues/2923
  event.sender.startDrag({
    file: payload.filePath,
    icon: path.join(__dirname, '../../public/assets/orbital-256.png'),
  });
});

ipcMain.on('open-directory', async (event, payload) => {
  const result = await dialog.showOpenDialog(win, {
    properties: ['openDirectory'],
  });

  if (result.canceled) {
    event.reply('open-directory', {
      path: '',
      files: [],
    });
  } else {
    const files: Array<IFile> = [];
    const rootDir = result.filePaths[0];
    const globExtensions = allFileExtensions
      .map((fileExtension) => `*.${fileExtension}`)
      .join('|');

    glob(
      `${rootDir}/**/*(${globExtensions})`,
      { nocase: true },
      function (err, fullFilePaths) {
        console.log(fullFilePaths);

        if (err) {
          // TODO: Replace with with error log
          console.log('err');
          event.reply('open-directory', {
            path: '',
            files: [],
          });
          return;
        }

        fullFilePaths.map((fullFilePath) => {
          const fileStat = fs.statSync(fullFilePath);
          const filename = fullFilePath.substr(rootDir.length + 1);
          files.push({
            name: filename,
            path: fullFilePath,
            ctime: fileStat.ctime.toString(),
          });
        });

        event.reply('open-directory', {
          path: result.filePaths[0],
          files: files,
        });
      }
    );
  }
});

/* ================================================================ */
/* ================================================================ */

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // SN: Register file protocol to work in dev mode.
  // NOTE: Works live because app asks for user permission.
  protocol.registerFileProtocol('file-protocol', (request, callback) => {
    // NOTE: Maybe leave this in for debugging?
    // console.log(request);
    const url = decodeURIComponent(
      request.url.replace('file-protocol://getMediaFile/', '')
    );
    try {
      return callback(url);
    } catch (e) {
      console.error(e);
      return callback('404');
    }
  });

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
