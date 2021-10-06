import { useAppSelector } from '../../../store/hooks';
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
  const folder = useAppSelector((state) => state.folder);

  const getReadableDate = (): string => {
    return new Date(ctime).toLocaleString().split(',')[0];
  };

  const getReadablePath = (): string => {
    return path.substr(folder.path.length);
    // const subStringArray = path.substr(folder.path.length).split('/');
    // let readablePath = '';
    // for (let i = 0; i < subStringArray.length - 1; i++) {
    //   if (subStringArray[i].length > 0) {
    //     readablePath += '/' + subStringArray[i][0];
    //   }
    // }
    // readablePath += '/' + subStringArray[subStringArray.length - 1];
    // return readablePath;
  };

  return (
    <div className="fixed inset-0 text-xl text-activity-fg filter bg-activity-bg z-10">
      <div
        className="fixed top-4 right-4 z-20 cursor-pointer"
        onClick={handleClose}
      >
        ❌
      </div>
      <div className="absolute w-full h-full flex place-items-center justify-center">
        <div className="flex flex-col space-y-2 w-3/5">
          <div className="flex justify-between place-items-center">
            <div className="font-bold" onClick={handleClose}>
              {getReadablePath()}
            </div>
            <div className="font-bold" onClick={handleClose}>
              {getReadableDate()}
            </div>
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
