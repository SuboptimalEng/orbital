import hotkeys from 'hotkeys-js';
import dateFormat from 'dateformat';
import { useEffect, useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import { IFile, IMediaPreview } from '../../../types';
import { isVideoFile } from '../../../../common/mediaExtensions';

import { closeMediaPreview } from '../../../store/explorerSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import ImagePreview from './ImagePreview';
import VideoPreview from './VideoPreview';

export default function MediaPreview({ index, infiniteFiles }: IMediaPreview) {
  const dispatch = useAppDispatch();
  const folder = useAppSelector((state) => state.folder);

  const [file, setFile] = useState<IFile>(infiniteFiles[index]);
  const [currentIndex, setCurrentIndex] = useState<number>(index);

  // TODO V2: Refactor hot keys into global function.
  useEffect(() => {
    const closePreview = () => {
      dispatch(closeMediaPreview());
      console.log('close preview');
    };

    hotkeys('esc', closePreview);
    hotkeys('left', displayPreviousFile);
    hotkeys('right', displayNextFile);

    return () => {
      hotkeys.unbind('esc');
      hotkeys.unbind('left');
      hotkeys.unbind('right');
    };
  });

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
    <div className="fixed inset-0 text-2xl bg-preview-bg text-preview-fg z-10">
      <div className="fixed top-4 inset-x-4 flex justify-between place-items-start z-20">
        <div className="flex flex-col">
          <div className="font-bold">{getReadablePath()}</div>
          <div className="text-sm">{getReadableDate()}</div>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => dispatch(closeMediaPreview())}
        >
          <AiOutlineClose className="transition-all duration-500 text-5xl hover:text-red" />
        </div>
      </div>
      <div className="absolute inset-x-4 inset-y-4 flex place-items-center justify-between">
        <div className="cursor-pointer text-3xl" onClick={displayPreviousFile}>
          <BiLeftArrowAlt className="transition-all transform hover:scale-150" />
        </div>

        <div className="flex flex-col justify-center place-items-center h-5/6 w-5/6">
          {isVideoFile(file.path) ? (
            <VideoPreview {...file} />
          ) : (
            <ImagePreview {...file} />
          )}
        </div>

        <div className="cursor-pointer text-3xl" onClick={displayNextFile}>
          <BiRightArrowAlt className="transition-all transform hover:scale-150" />
        </div>
      </div>
    </div>
  );
}
