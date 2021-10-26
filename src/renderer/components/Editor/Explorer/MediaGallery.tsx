import { useEffect, useState, DragEvent } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { distance } from 'fastest-levenshtein';

import { IFile } from '../../../types';
import { isVideoFile } from '../../../../common/mediaExtensions';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  openMediaPreview,
  setFilteredFiles,
} from '../../../store/explorerSlice';

import ImageCard from './ImageCard';
import VideoCard from './VideoCard';
import MediaPreview from './MediaPreview';

export default function MediaGallery() {
  const dispatch = useAppDispatch();
  const { files } = useAppSelector((state) => state.folder);
  const { numOfFilesToLoad } = useAppSelector((state) => state.settings);
  const { query, filteredFiles, showMediaPreview } = useAppSelector(
    (state) => state.explorer
  );

  const [fileIndex, setFileIndex] = useState<number>(0);
  const [hasMoreFiles, setHasMoreFiles] = useState(true);
  const [infiniteFiles, setInfiniteFiles] = useState<Array<IFile>>([]);

  useEffect(() => {
    const MAX_DISTANCE = 1;
    // NOTE: This method updates the list of files to show in the media gallery.
    const searchResults = files.filter((file) => {
      // NOTE: The total distance between the query and filename can be very large
      // if the query is really short, or the user does not specify anything. To
      // adjust for this, we need to calculate another distance based on the query.
      const totalDistance = distance(
        query.toLowerCase(),
        file.name.toLowerCase()
      );
      const adjustedDistance =
        totalDistance - (file.name.length - query.length);
      return adjustedDistance <= MAX_DISTANCE;
    });

    dispatch(setFilteredFiles(searchResults));

    const initialFiles: Array<IFile> = [];
    const numOfFiles =
      searchResults.length < numOfFilesToLoad
        ? searchResults.length
        : numOfFilesToLoad;

    for (let i = 0; i < numOfFiles; i++) {
      initialFiles.push(searchResults[i]);
    }
    setInfiniteFiles([...initialFiles]);

    if (searchResults.length < numOfFilesToLoad) {
      setHasMoreFiles(false);
    } else {
      setHasMoreFiles(true);
    }

    // eslint-disable-next-line
  }, [query]);

  // TODO V2: Fix fake loading bug when scroll not activated.
  const updateInfiniteFiles = () => {
    const nextSetOfFiles: Array<IFile> = [];

    const numOfFiles =
      infiniteFiles.length + numOfFilesToLoad > filteredFiles.length
        ? filteredFiles.length
        : infiniteFiles.length + numOfFilesToLoad;

    for (let i = infiniteFiles.length; i < numOfFiles; i++) {
      nextSetOfFiles.push(filteredFiles[i]);
    }

    if (infiniteFiles.length + numOfFilesToLoad > filteredFiles.length) {
      setHasMoreFiles(false);
    } else {
      setHasMoreFiles(true);
    }

    setInfiniteFiles((infiniteFiles) => [...infiniteFiles, ...nextSetOfFiles]);
  };

  const openFile = (index: number) => {
    setFileIndex(index);
    dispatch(openMediaPreview());
  };

  const getCardComponent = (file: IFile): JSX.Element => {
    const cardComponentMap = {
      video: <VideoCard {...file} />,
      image: <ImageCard {...file} />,
    };

    return isVideoFile(file.path)
      ? cardComponentMap.video
      : cardComponentMap.image;
  };

  const handleCardDrag = (event: DragEvent, filePath: string) => {
    event.preventDefault();
    // console.log(filePath);
    window.ipc.send('start-drag', { filePath });
  };

  return (
    <div
      id="scrollableDiv"
      className="absolute top-24 inset-x-0 bottom-0 px-16 py-8 scrollbar scrollbar-thumb-scrollbar-fg scrollbar-track-scrollbar-bg"
    >
      {/* NOTE: Show individual file display modal.  */}
      {showMediaPreview ? (
        <MediaPreview index={fileIndex} infiniteFiles={infiniteFiles} />
      ) : null}

      {/* NOTE: Show file system gallery. */}
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
          {/* TODO V2: Maybe use grid instead of flex box? */}
          <div className="flex flex-wrap justify-items-center">
            {infiniteFiles.map((file: IFile, index: number) => {
              return (
                <div
                  onClick={() => openFile(index)}
                  key={`file-protocol://getMediaFile/${file.path}`}
                  onDrag={(e) => handleCardDrag(e, file.path)}
                  className="h-60 w-80 flex flex-grow m-1"
                >
                  {getCardComponent(file)}
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}
