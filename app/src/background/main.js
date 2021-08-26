// import { app, BrowserWindow, protocol } from 'electron';
// import path from 'path';
// import isDev from 'electron-is-dev';
const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  const preload = path.join(__dirname, 'preload.js');
  console.log({ preload });

  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    vibrancy: 'under-window',
    visualEffectState: 'followWindow',
    webPreferences: {
      // Allow renderer to read files from computer.
      webSecurity: false,
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../../build/index.html')}`
  );
}

/* ================================================================ */
/* ================================================================ */

const fs = require('fs');

// const ffmpeg = require('fluent-ffmpeg');
// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
// const ffprobePath = require('@ffprobe-installer/ffprobe').path;
// ffmpeg.setFfmpegPath(ffmpegPath.replace('app.asar', 'app.asar.unpacked'));
// ffmpeg.setFfprobePath(ffprobePath.replace('app.asar', 'app.asar.unpacked'));

const { ipcMain } = require('electron');
ipcMain.on('test', (event, payload) => {
  // ffmpeg('/Users/suboptimaleng/Desktop/orb/steve_jobs_demo.mp4').screenshots({
  //   count: 1,
  //   filename: 'abc.jpg',
  //   folder: '/Users/suboptimaleng/Desktop/orb/',
  // });

  // const img = {}; img.name =
  // const str = fs.readFileSync('/Users/suboptimaleng/Desktop/orb/abc.jpg')

  console.log('test!!!', payload);
  const file = fs.openSync(
    '/Users/suboptimaleng/Desktop/orb/steve_jobs_demo.mp4'
  );

  console.log(file);
  event.reply('test', { from: 'main.js' });
});

/* ================================================================ */
/* ================================================================ */

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  protocol.interceptFileProtocol('file', (request, callback) => {
    const pathname = request.url.replace('file:///', '');
    console.log('hi!!!!!!!!!');
    callback(pathname);
  });

  // const ffmpeg = require('fluent-ffmpeg');
  // const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
  // const ffprobePath = require('@ffprobe-installer/ffprobe').path;
  // console.log({ ffmpegPath, ffprobePath });
  // ffmpeg.setFfmpegPath(ffmpegPath.replace('app.asar', 'app.asar.unpacked'));
  // ffmpeg.setFfprobePath(ffprobePath.replace('app.asar', 'app.asar.unpacked'));
  // ffmpeg('/Users/suboptimaleng/Desktop/orb/steve_jobs_demo.mp4').screenshots({
  //   count: 1,
  //   filename: 'abc.jpg',
  //   folder: '/Users/suboptimaleng/Desktop/orb/',
  // });

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
