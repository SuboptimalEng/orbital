const imageFileExtensions = ['jpeg', 'jpg', 'png', 'webp', 'ico'];

const videoFileExtensions = ['webm', 'mp4', 'mov'];

const allFileExtensions = [...imageFileExtensions, ...videoFileExtensions];

const isVideoFile = (filePath) => {
  return videoFileExtensions.some((videoFileExtension) =>
    filePath.endsWith(videoFileExtension)
  );
};

module.exports = {
  isVideoFile,
  allFileExtensions,
};
