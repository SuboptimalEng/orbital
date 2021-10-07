import dateFormat from 'dateformat';
import { useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { IFile } from '../../../types';

interface IPropTypes {
  index: number;
  handleClose: () => void;
  infiniteFiles: Array<IFile>;
}

export default function ViewImageFile({
  index,
  handleClose,
  infiniteFiles,
}: IPropTypes) {
  const [file, setFile] = useState<IFile>(infiniteFiles[index]);
  const [currentIndex, setCurrentIndex] = useState<number>(index);
  const folder = useAppSelector((state) => state.folder);

  const viewPreviousFile = () => {
    // TODO: Handle out of bounds error in the UI.
    if (currentIndex >= 1) {
      setFile(infiniteFiles[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const viewNextFile = () => {
    // TODO: Handle out of bounds error in the UI.
    if (currentIndex + 1 <= infiniteFiles.length) {
      setFile(infiniteFiles[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getReadableDate = (): string => {
    const date = new Date(file.ctime);
    return dateFormat(date, 'mmmm dS, yyyy - h:MM TT');
  };

  const getReadablePath = (): string => {
    return file.path.substr(folder.path.length);
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
    <div className="fixed inset-0 text-2xl text-activity-fg filter bg-activity-bg z-10">
      <div className="fixed top-4 inset-x-4 flex justify-between place-items-start z-20">
        <div className="flex flex-col">
          <div className="font-bold">{getReadablePath()}</div>
          <div className="text-sm">{getReadableDate()}</div>
        </div>
        <div className="cursor-pointer" onClick={handleClose}>
          ❌
        </div>
      </div>
      <div className="absolute inset-x-4 inset-y-4 flex place-items-center justify-between">
        <div className="cursor-pointer text-3xl" onClick={viewPreviousFile}>
          ⬅️
        </div>

        <div className="flex flex-col justify-center space-y-2 h-2/3 w-2/3">
          <img
            id={file.path}
            src={`file-protocol://getMediaFile/${file.path}`}
            className="object-contain max-w-full max-h-full"
            alt=""
          />
        </div>

        <div className="cursor-pointer text-3xl" onClick={viewNextFile}>
          ➡️
        </div>
      </div>
    </div>
  );
}
