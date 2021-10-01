import { MouseEvent, SyntheticEvent, useState } from 'react';
import { IFile } from '../../../types';

export default function Video({ path, name, ctime }: IFile) {
  let videoWidth = 10000;
  let boundingClientLeft = 0;
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

  const openFile = () => {
    window.ipc.send('open-file', { path });
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

  // TODO V2: Display date at some point.
  // const getReadableDate = (): string => {
  //   return new Date(ctime).toLocaleString().split(',')[0];
  // };

  return (
    <button className="relative" onClick={openFile}>
      <video
        id={path}
        src={`file-protocol://getMediaFile/${path}`}
        className="border-b border-editor-border"
        onLoadedMetadata={setDurationOnLoad}
        onMouseEnter={saveVideoElementData}
        onMouseMove={previewOnHover}
      />
      <div className="absolute text-xs p-1 bottom-11 right-2 bg-activity-bg text-activity-fg rounded">
        {getReadableDuration()}
      </div>
      <div className="flex justify-between p-2 text-xs font-bold">
        <div>{name}</div>
        {/* <div>{getReadableDate()}</div> */}
      </div>
    </button>
  );
}
