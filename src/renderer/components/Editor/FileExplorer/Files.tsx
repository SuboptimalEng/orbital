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
  const [hasMoreFiles, setHasMoreFiles] = useState(true);

  useEffect(() => {
    // TODO V2: Sort files by name using the sortByName redux variable.
    const filteredFiles = files.filter((file) => file.path.includes(query));
    setFilteredFiles(filteredFiles);

    // NOTE: Get first 10 files for infinite scroll.
    const initialFiles: Array<IFile> = [];
    const numOfFiles = filteredFiles.length < 10 ? filteredFiles.length : 10;

    // TODO: Do proper bound checks
    for (let i = 0; i < numOfFiles; i++) {
      initialFiles.push(filteredFiles[i]);
    }
    setInfiniteFiles([...initialFiles]);

    if (filteredFiles.length < 10) {
      setHasMoreFiles(false);
    } else {
      setHasMoreFiles(true);
    }

    // eslint-disable-next-line
  }, [query]);

  const updateInfiniteFiles = () => {
    const nextSetOfFiles: Array<IFile> = [];

    const numOfFiles =
      infiniteFiles.length + 10 > filteredFiles.length
        ? filteredFiles.length
        : infiniteFiles.length + 10;

    // TODO: Do proper bound checks
    for (let i = infiniteFiles.length; i < numOfFiles; i++) {
      nextSetOfFiles.push(filteredFiles[i]);
    }

    if (infiniteFiles.length + 10 > filteredFiles.length) {
      setHasMoreFiles(false);
    } else {
      setHasMoreFiles(true);
    }

    setInfiniteFiles([...infiniteFiles, ...nextSetOfFiles]);
  };

  return (
    <div
      id="scrollableDiv"
      className="absolute top-24 inset-x-0 bottom-0 px-16 py-8 scrollbar scrollbar-thumb-scrollbar-fg scrollbar-track-scrollbar-bg"
    >
      {infiniteFiles.length === 0 ? (
        <div>No files match your search query 😭</div>
      ) : (
        <InfiniteScroll
          dataLength={infiniteFiles.length}
          next={updateInfiniteFiles}
          hasMore={hasMoreFiles}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
          className="scrollbar-none"
        >
          <div className={gridColsClassName()}>
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
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}
