import { MouseEvent, SyntheticEvent, useState } from 'react';

import { IFile } from '../../../types';
import { useAppSelector } from '../../../store/hooks';

export default function VideoCard({ path }: IFile) {
  let videoWidth = 10000;
  let boundingClientLeft = 0;
  const folder = useAppSelector((state) => state.folder);
  const [duration, setDuration] = useState<number>(0);

  const setDurationOnLoad = (e: SyntheticEvent<HTMLVideoElement>) => {
    setDuration(e.currentTarget.duration);
  };

  const saveVideoElementData = (e: SyntheticEvent<HTMLVideoElement>) => {
    videoWidth = e.currentTarget.getBoundingClientRect().width;
    boundingClientLeft = e.currentTarget.getBoundingClientRect().left;
  };

  const previewOnHover = (e: MouseEvent) => {
    const videoElement = document.getElementById(path) as HTMLVideoElement;
    if (videoElement.readyState < 3) {
      return;
    }

    // NOTE: Percent of distance the mouse has travelled across the video element.
    // NOTE: Ensure that this percentage is in increments of 10% (1 - 10%, 2 - 20%, etc.).
    // NOTE: Percent Enum => 1 - 10%, 2 - 20%, 3 - 30%, etc.
    const percentEnum = Math.round(
      ((e.clientX - boundingClientLeft) * 10) / videoWidth
    );
    const currentTime = Math.round((percentEnum / 10) * videoElement.duration);

    videoElement.currentTime = currentTime;
  };

  const getReadableDuration = (): string => {
    const date = new Date(0);
    date.setSeconds(duration); // specify value for SECONDS here
    let readableDuration = date.toISOString().substr(11, 8);
    if (readableDuration[0] === '0' && readableDuration[1] === '0') {
      readableDuration = readableDuration.substr(3, 5);
    }
    return readableDuration;
  };

  const getReadablePath = (): string => {
    return path.substr(folder.path.length);
  };

  return (
    <div className="relative h-full w-full flex place-items-center justify-center bg-card-bg cursor-pointer">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center place-items-center">
        <video
          id={path}
          src={`file-protocol://getMediaFile/${path}`}
          typeof="video/ogg"
          className="object-cover h-full max-w-full"
          onLoadedMetadata={setDurationOnLoad}
          onMouseEnter={saveVideoElementData}
          onMouseMove={previewOnHover}
        />
      </div>

      <div className="absolute text-sm px-1 right-0 top-2 bg-editor-bg text-editor-fg place-items-center">
        <div>{getReadableDuration()}</div>
      </div>

      <div className="absolute text-sm px-1 bottom-2 left-0 max-w-full bg-editor-bg text-editor-fg place-items-center">
        <div className="truncate">{getReadablePath()}</div>
      </div>
    </div>
  );
}
