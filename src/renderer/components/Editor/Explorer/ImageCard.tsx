import { IFile } from '../../../types';
import { useAppSelector } from '../../../store/hooks';

export default function ImageCard({ path }: IFile) {
  const folder = useAppSelector((state) => state.folder);

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
    <div className="relative h-full w-full flex place-items-center justify-center bg-card-bg cursor-pointer">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center place-items-center">
        <img
          src={`file-protocol://getMediaFile/${path}`}
          className="object-cover w-full h-full"
          alt=""
        />
      </div>
      <div className="absolute text-sm p-1 bottom-2 left-0 right-0 bg-editor-bg text-editor-fg   place-items-center">
        <div className="truncate">{getReadablePath()}</div>
      </div>
    </div>
  );
}
