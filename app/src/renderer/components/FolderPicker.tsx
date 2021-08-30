import React, { useEffect } from 'react';
import { setFolder } from '../redux/folderSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const FolderPicker = () => {
  const { path, files } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.ipc.on('select-dirs', (payload: any) => {
      console.log(payload);
      dispatch(setFolder(payload));
    });
    // eslint-disable-next-line
  }, []);

  const selectFolder = () => {
    window.ipc.send('select-dirs');
  };

  return (
    <div>
      <button className="border p-2 rounded" onClick={() => selectFolder()}>
        Select Folder
      </button>
      <div className="border p-2 rounder">{path}</div>
      <div className="flex flex-row flex-wrap justify-between mx-4">
        {files.map((file: any) => {
          return (
            <div
              className="h-40 w-40 p-2 my-8 border"
              key={`file-protocol://getMediaFile/${file.path}`}
            >
              <div className="border flex flex-col">
                <img
                  src={`file-protocol://getMediaFile/${file.path}`}
                  className="w-40 self-center"
                  alt=""
                ></img>
                <div className="text-xs border p-2">{file.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { FolderPicker };
