import { useAppSelector } from '../../../store/hooks';
import { IFile } from '../../../types';
import dateFormat from 'dateformat';

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
    const date = new Date(ctime);
    return dateFormat(date, 'mmmm dS, yyyy @ h:MM TT');
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
          <video
            id={path}
            src={`file-protocol://getMediaFile/${path}`}
            typeof="video/ogg"
            className="w-full max-h-full"
            controls
          />
          <div className="flex flex-col">
            <div className="font-bold" onClick={handleClose}>
              {getReadablePath()}
            </div>
            <div className="text-xs" onClick={handleClose}>
              {getReadableDate()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
