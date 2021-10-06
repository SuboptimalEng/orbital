import dateFormat from 'dateformat';
import { useAppSelector } from '../../../store/hooks';
import { IFile } from '../../../types';

interface IPropTypes extends IFile {
  handleClose: () => void;
}

export default function ViewImageFile({
  path,
  name,
  ctime,
  handleClose,
}: IPropTypes) {
  const folder = useAppSelector((state) => state.folder);

  const getReadableDate = (): string => {
    const date = new Date(ctime);
    return dateFormat(date, 'mmmm dS, yyyy - h:MM TT');
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
      <div className="fixed top-4 inset-x-4 flex justify-between place-items-start z-20">
        <div className="flex flex-col">
          <div className="text-2xl font-bold">{getReadablePath()}</div>
          <div className="text-sm">{getReadableDate()}</div>
        </div>
        <div className="text-2xl cursor-pointer" onClick={handleClose}>
          ❌
        </div>
      </div>
      <div className="absolute w-full h-full flex place-items-center justify-center">
        <div className="flex flex-col justify-center space-y-2 h-2/3 w-2/3">
          <img
            id={path}
            src={`file-protocol://getMediaFile/${path}`}
            className="object-contain max-w-full max-h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
