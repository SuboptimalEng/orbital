import { useEffect, useState } from 'react';
import { IFile } from '../../../types';
import { useAppSelector } from '../../../store/hooks';

import Video from './Video';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Files() {
  const { query } = useAppSelector((state) => state.search);
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
  const [infiniteFiles, setInfiniteFiles] = useState<Array<IFile>>([]);

  useEffect(() => {
    // TODO V2: Sort files by name using the sortByName redux variable.
    const filteredFiles = files.filter((file) => file.path.includes(query));
    setFilteredFiles(filteredFiles);

    // NOTE: Get first 10 files for infinite scroll.
    const first10: Array<IFile> = [];
    for (let i = 0; i < 10; i++) {
      first10.push(filteredFiles[i]);
    }
    setInfiniteFiles([...first10]);

    // eslint-disable-next-line
  }, [query]);

  const updateInfiniteFiles = () => {
    console.log('hi');
    const next10: Array<IFile> = [];

    // TODO: Do proper bound checks
    for (let i = infiniteFiles.length; i < infiniteFiles.length + 10; i++) {
      next10.push(filteredFiles[i]);
    }

    console.log(next10);

    setInfiniteFiles([...infiniteFiles, ...next10]);
    console.log(infiniteFiles);
  };

  return (
    <div
      id="scrollableDiv"
      className="absolute top-24 inset-x-0 bottom-0 px-16 py-8 scrollbar scrollbar-thumb-scrollbar-fg scrollbar-track-scrollbar-bg"
    >
      {infiniteFiles.length === 0 ? (
        <div>No files match your search query 😭</div>
      ) : (
        // <div className={gridColsClassName()}>
        <InfiniteScroll
          dataLength={infiniteFiles.length}
          next={updateInfiniteFiles}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {infiniteFiles.map((file: IFile) => {
            return (
              <div
                className="flex flex-col border border-editor-border"
                key={`file-protocol://getMediaFile/${file.path}`}
              >
                {file.path.includes('mp4') || file.path.includes('MP4') ? (
                  <Video {...file} />
                ) : (
                  <img
                    src={`file-protocol://getMediaFile/${file.path}`}
                    className="object-cover w-full"
                    alt=""
                  />
                )}
              </div>
            );
          })}
        </InfiniteScroll>
        // </div>
      )}
    </div>
  );
}
