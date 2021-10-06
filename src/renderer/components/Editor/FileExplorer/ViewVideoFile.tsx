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
    <div className="fixed inset-0 text-xl text-activity-fg filter bg-activity-bg z-10">
      <div
        className="fixed top-4 right-4 z-20 cursor-pointer"
        onClick={handleClose}
      >
        ❌
      </div>
      <div className="absolute w-full h-full flex place-items-center justify-center">
        <div className="flex flex-col space-y-2 w-2/3">
          <div className="font-bold" onClick={handleClose}>
            {path}
          </div>
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
