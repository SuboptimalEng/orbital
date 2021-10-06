import { MouseEvent, SyntheticEvent, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { IFile } from '../../../types';
import ViewVideoFile from './ViewVideoFile';

export default function PreviewVideoFile({ path, name, ctime }: IFile) {
  let videoWidth = 10000;
  let boundingClientLeft = 0;
  const folder = useAppSelector((state) => state.folder);
  const [duration, setDuration] = useState<number>(0);
  const [viewVideoFile, setViewVideoFile] = useState<boolean>(false);

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
    setViewVideoFile(true);
    // window.ipc.send('open-file', { path });
  };

  const handleClose = () => {
    setViewVideoFile(false);
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

  // TODO V2: Display date at some point.
  // const getReadableDate = (): string => {
  //   return new Date(ctime).toLocaleString().split(',')[0];
  // };

  return (
    <div className="relative h-full w-full flex place-items-center justify-center">
      {viewVideoFile ? (
        <ViewVideoFile
          path={path}
          name={name}
          ctime={ctime}
          handleClose={handleClose}
        />
      ) : null}
      <div
        onClick={openFile}
        className="relative h-full w-full flex place-items-center justify-center bg-activity-bg cursor-pointer"
      >
        <video
          id={path}
          src={`file-protocol://getMediaFile/${path}`}
          typeof="video/ogg"
          className="object-cover h-full"
          onLoadedMetadata={setDurationOnLoad}
          onMouseEnter={saveVideoElementData}
          onMouseMove={previewOnHover}
        />
        <div className="absolute text-xs p-1 bottom-2 left-0 bg-editor-bg text-editor-fg font-medium rounded-r-lg">
          {getReadablePath()}
        </div>
        <div className="absolute text-xs p-1 bottom-2 right-0 bg-editor-bg text-editor-fg font-medium rounded-l-lg">
          {getReadableDuration()}
        </div>
        {/* <div className="flex justify-between p-2 text-xs font-bold">
            <div>{name}</div>
            <div>{getReadableDate()}</div>
          </div> */}
      </div>
    </div>
  );
}
