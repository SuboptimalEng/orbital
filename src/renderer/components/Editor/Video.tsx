import { SyntheticEvent, useState } from 'react';
import { IFile } from '../../types';

const Video = ({ path, name, ctime }: IFile) => {
  const [duration, setDuration] = useState<number>(0);

  const setDurationOnLoad = (e: SyntheticEvent<HTMLVideoElement>) => {
    setDuration(e.currentTarget.duration);
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

  const getReadableDate = (): string => {
    return new Date(ctime).toLocaleString().split(',')[0];
  };

  return (
    <button className="relative" onClick={openFile}>
      <video
        id={path}
        src={`file-protocol://getMediaFile/${path}`}
        className="border-b border-editor-border"
        onLoadedMetadata={setDurationOnLoad}
      />
      <div className="absolute text-xs p-1 bottom-11 right-2 bg-activity-bg text-activity-fg rounded">
        {getReadableDuration()}
      </div>
      <div className="flex justify-between p-2 text-sm font-bold">
        <div>{name}</div>
        <div>{getReadableDate()}</div>
      </div>
    </button>
  );
};

export { Video };
