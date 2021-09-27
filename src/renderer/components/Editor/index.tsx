import { useAppSelector } from '../../store/hooks';
import { IFile } from '../../types';
import { Video } from './Video';
import { Welcome } from './Welcome';

const Editor = () => {
  const { path, files } = useAppSelector((state) => state.folder);
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
    <div className="bg-editor-bg text-editor-fg h-full">
      {path.length === 0 ? (
        <Welcome />
      ) : (
        // TODO: Make this a VideoList.tsx component.
        <div className="absolute inset-0 px-16 py-8 scrollbar scrollbar-thumb-scrollbar-fg scrollbar-track-scrollbar-bg">
          <div className={gridColsClassName()}>
            {files.map((file: IFile) => {
              return (
                <div
                  className="flex flex-col border border-editor-border"
                  key={`file-protocol://getMediaFile/${file.path}`}
                >
                  <Video {...file}></Video>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export { Editor };
