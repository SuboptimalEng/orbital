import dateFormat from 'dateformat';
import { useState } from 'react';

import { IFile, IDisplayFile } from '../../../types';
import { isVideoFile } from '../../../../common/fileExtensions';

import { toggleFileDisplay } from '../../../store/explorerSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import ImageDisplay from './ImageDisplay';
import VideoDisplay from './VideoDisplay';

export default function MediaDisplay({ index, infiniteFiles }: IDisplayFile) {
  const dispatch = useAppDispatch();

  const [file, setFile] = useState<IFile>(infiniteFiles[index]);
  const [currentIndex, setCurrentIndex] = useState<number>(index);
  const folder = useAppSelector((state) => state.folder);

  const displayPreviousFile = () => {
    // TODO: Handle out of bounds error in the UI.
    if (currentIndex >= 1) {
      setFile(infiniteFiles[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayNextFile = () => {
    // TODO: Handle out of bounds error in the UI.
    if (currentIndex + 1 < infiniteFiles.length) {
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
  };

  return (
    <div className="fixed inset-0 text-2xl text-activity-fg filter bg-activity-bg z-10">
      <div className="fixed top-4 inset-x-4 flex justify-between place-items-start z-20">
        <div className="flex flex-col">
          <div className="font-bold">{getReadablePath()}</div>
          <div className="text-sm">{getReadableDate()}</div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => dispatch(toggleFileDisplay())}
        >
          ❌
        </div>
      </div>
      <div className="absolute inset-x-4 inset-y-4 flex place-items-center justify-between">
        <div className="cursor-pointer text-3xl" onClick={displayPreviousFile}>
          ⬅️
        </div>

        <div className="flex flex-col justify-center space-y-2 h-2/3 w-2/3">
          {isVideoFile(file.path) ? (
            <VideoDisplay {...file} />
          ) : (
            <ImageDisplay {...file} />
          )}
        </div>

        <div className="cursor-pointer text-3xl" onClick={displayNextFile}>
          ➡️
        </div>
      </div>
    </div>
  );
}
