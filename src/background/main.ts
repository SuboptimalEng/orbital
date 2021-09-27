import { app, BrowserWindow, protocol } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import { add } from './add';
// const { app, BrowserWindow, protocol } = require('electron');
// const path = require('path');
// const isDev = require('electron-is-dev');

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

// const fs = require('fs');
import * as fs from 'fs';
import { IFile } from '../renderer/types';
// const ffmpeg = require('fluent-ffmpeg');
// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
// const ffprobePath = require('@ffprobe-installer/ffprobe').path;
// ffmpeg.setFfmpegPath(ffmpegPath.replace('app.asar', 'app.asar.unpacked'));
// ffmpeg.setFfprobePath(ffprobePath.replace('app.asar', 'app.asar.unpacked'));

const { ipcMain, dialog } = require('electron');
ipcMain.on('test', (event, payload) => {
  // ffmpeg('/Users/suboptimaleng/Desktop/orb/steve_jobs_demo.mp4').screenshots({
  //   count: 1,
  //   filename: 'abc.jpg',
  //   folder: '/Users/suboptimaleng/Desktop/orb/',
  // });
  console.log('add test: ', add(1, 2));
  event.reply('test', { from: 'main.js' });
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

    fs.readdirSync(result.filePaths[0]).forEach((filename: string) => {
      const fullFilePath = `${result.filePaths[0]}/${filename}`;
      const fileStat = fs.statSync(fullFilePath);
      // TODO: Allow user to filter through multiple file types.
      if (
        fileStat.isFile() &&
        path.extname(fullFilePath).toLocaleLowerCase() === '.mp4'
      ) {
        files.push({
          name: filename,
          path: fullFilePath,
          ctime: fileStat.ctime.toString(),
        });
      }
    });

    event.reply('open-directory', {
      path: result.filePaths[0],
      files: files,
    });
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
