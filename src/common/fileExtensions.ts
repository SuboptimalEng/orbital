// TODO V2: Figure out how to display these types of files.
// 'mpg', // could be opened, but not working in preview
// 'avi', // could not be opened on mac
// 'wmv', // could not be opened on mac
const videoExtensions: Array<string> = ['mov', 'mp4', 'webm', 'ogg'];

// TODO V2: Figure out how to display all types of image files.
// 'icns',
const imageExtensions: Array<string> = [
  'ico',
  'jpeg',
  'jpg',
  'png',
  'svg',
  'webp',
];

const allFileExtensions: Array<string> = [
  ...imageExtensions,
  ...videoExtensions,
];

export { videoExtensions, imageExtensions, allFileExtensions };
