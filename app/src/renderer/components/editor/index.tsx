import { useAppSelector } from '../../store/hooks';
import { IFile } from '../../types';

const Editor = () => {
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
                src={`file-protocol://getMediaFile/${file.path}`}
                className="rounded-t-lg border-b-2 border-green"
              />
              <div className="text-xs p-2">{file.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Editor };
