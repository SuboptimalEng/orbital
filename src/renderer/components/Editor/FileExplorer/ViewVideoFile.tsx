import { IFile } from '../../../types';

interface IPropTypes extends IFile {
  handleClose: () => void;
}

export default function ViewVideoFile({
  path,
  name,
  ctime,
  handleClose,
}: IPropTypes) {
  return (
    <div className="fixed inset-0 filter bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg z-10">
      <div
        className="fixed right-4 top-4 z-20 cursor-pointer"
        onClick={handleClose}
      >
        ❌
      </div>
      <div className="absolute w-full h-full flex place-items-center justify-center">
        <div className="w-2/3">
          <video
            id={path}
            src={`file-protocol://getMediaFile/${path}`}
            typeof="video/ogg"
            className="w-full max-h-full"
            controls
          />
        </div>
      </div>
    </div>
  );
}
