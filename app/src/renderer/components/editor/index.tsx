import { SyntheticEvent, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { IFile } from '../../types';

const Editor = () => {
  const [duration, setDuration] = useState<number>(0);
  const { files } = useAppSelector((state) => state.folder);
  const { numOfCols } = useAppSelector((state) => state.settings);

  interface INumOfColsToGridMap {
    [key: string]: string;
  }

  const numOfColsToGridMap: INumOfColsToGridMap = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-2',
    '3': 'grid-cols-3',
    '4': 'grid-cols-4',
    '5': 'grid-cols-5',
    '6': 'grid-cols-6',
  };

  // NOTE: Ensure that tailwind purges the right CSS styles when building.
  const gridColsClassName = () => {
    const numOfGridColsStr = numOfColsToGridMap[numOfCols.toString()];
    const className = `grid ${numOfGridColsStr} gap-8`;
    return className;
  };

  const setDurationOnLoad = (e: SyntheticEvent<HTMLVideoElement>) => {
    setDuration(e.currentTarget.duration);
  };

  // const setDurationOnLoad = (data: any) => {
  //   console.log(data);
  //   setDuration(data.duration);
  //   return undefined;
  //   // console.log(id);
  //   // const element = document.getElementById(id) as any;
  //   // return element?.duration;
  // };

  return (
    <div className="absolute inset-0 px-16 py-2 scrollbar scrollbar-thumb-green scrollbar-track-sidebar-bg">
      <div className={gridColsClassName()}>
        {files.map((file: IFile) => {
          return (
            <div
              className="flex flex-col border-2 border-green rounded-lg"
              key={`file-protocol://getMediaFile/${file.path}`}
            >
              <video
                id={file.path}
                src={`file-protocol://getMediaFile/${file.path}`}
                className="rounded-t-lg border-b-2 border-green"
                onLoadedMetadata={setDurationOnLoad}
              />
              <div className="text-xs p-2">
                {file.name} - {duration}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Editor };
