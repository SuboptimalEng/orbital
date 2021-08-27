import React, { useState, useEffect } from 'react';

const FolderPicker = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    window.ipc.on('select-dirs', (payload: any) => {
      if (payload.actionComplete) {
        setFiles(payload.files);
        console.log(files);
      }
    });
  }, []); 
  // eslint-disable-next-line

  const selectFolder = () => {
    window.ipc.send('select-dirs');
  };

  return (
    <div>
      <button className="border" onClick={() => selectFolder()}>
        Select Folder
      </button>
      <div className="flex flex-row flex-wrap justify-between mx-4">
        {files.map((file: any) => {
          return (
            <div
              className="h-40 w-40 p-2 my-8 border"
              key={`file-protocol://getMediaFile/${file.filepath}`}
            >
              <div className="border flex flex-col">
                <img
                  src={`file-protocol://getMediaFile/${file.filepath}`}
                  className="w-40 self-center"
                ></img>
                <div className="text-xs border p-2">{file.filename}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { FolderPicker };
