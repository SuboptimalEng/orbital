import { useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { IFile } from '../../../types';
import ViewImageFile from './ViewImageFile';

export default function PreviewImageFile({ path, name, ctime }: IFile) {
  const folder = useAppSelector((state) => state.folder);
  const [viewImageFile, setViewImageFile] = useState<boolean>(false);

  const openFile = () => {
    setViewImageFile(true);
  };

  const handleClose = () => {
    console.log('hi');
    setViewImageFile(false);
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
  return (
    <div className="relative h-full w-full flex place-items-center justify-center">
      {viewImageFile
        ? null
        : // <ViewImageFile
          //   path={path}
          //   name={name}
          //   ctime={ctime}
          //   handleClose={handleClose}
          // />
          null}

      {/* onClick={openFile} */}
      <div className="relative h-full w-full flex place-items-center justify-center bg-activity-bg cursor-pointer">
        <img
          src={`file-protocol://getMediaFile/${path}`}
          className="object-cover max-h-full"
          alt=""
        />

        <div className="absolute text-xs p-1 bottom-2 left-0 bg-editor-bg text-editor-fg font-medium rounded-r-lg">
          {getReadablePath()}
        </div>
      </div>
    </div>
  );
}
