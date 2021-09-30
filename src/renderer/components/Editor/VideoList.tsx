import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { IFile } from '../../types';
import { Video } from './Video';

const VideoList = () => {
  const { query, sortByName } = useAppSelector((state) => state.search);
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

  const [filteredFiles, setFilteredFiles] = useState<Array<IFile>>([]);
  const filterFiles = () => {
    setFilteredFiles(
      files
        .filter((file) => file.path.includes(query))
        .sort((a, b) => {
          const num = a.name.localeCompare(b.name);
          if (sortByName === 'asc') {
            return num;
          } else {
            return num * -1;
          }
        })
    );
  };

  useEffect(() => {
    filterFiles();
    // eslint-disable-next-line
  }, [query, sortByName]);

  return (
    <div className="absolute top-24 inset-x-0 bottom-0 px-16 py-8 scrollbar scrollbar-thumb-scrollbar-fg scrollbar-track-scrollbar-bg">
      {filteredFiles.length === 0 ? (
        <div>No files match your search query 😭</div>
      ) : (
        <div className={gridColsClassName()}>
          {filteredFiles.map((file: IFile) => {
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
      )}
    </div>
  );
};

export { VideoList };
