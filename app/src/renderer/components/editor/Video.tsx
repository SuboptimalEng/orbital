import { SyntheticEvent, useState } from 'react';
import { IFile } from '../../types';

const Video = ({ path, name }: IFile) => {
  const [duration, setDuration] = useState<number>(0);

  const setDurationOnLoad = (e: SyntheticEvent<HTMLVideoElement>) => {
    setDuration(e.currentTarget.duration);
  };

  return (
    <div>
      <video
        id={path}
        src={`file-protocol://getMediaFile/${path}`}
        className="rounded-t-lg border-b-2 border-green"
        onLoadedMetadata={setDurationOnLoad}
      />
      <div className="text-xs p-2">
        {name} - {duration}
      </div>
    </div>
  );
};

export { Video };
