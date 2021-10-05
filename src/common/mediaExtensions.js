"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.videoExtensions = exports.imageExtensions = exports.mediaExtensions = void 0;
var imageExtensions = ['ico', 'jpeg', 'jpg', 'png', 'svg', 'webp'];
exports.imageExtensions = imageExtensions;
var videoExtensions = ['avi', 'mov', 'mp4', 'mpg', 'ogg', 'webm', 'wmv'];
exports.videoExtensions = videoExtensions;
// TODO V2: Figure out how to display 'icns' files
var mediaExtensions = __spreadArray(__spreadArray([], imageExtensions), videoExtensions);
exports.mediaExtensions = mediaExtensions;
