import { useAppSelector } from '../../../store/hooks';
import { IFile } from '../../../types';

export default function PreviewImageFile({ path, name, ctime }: IFile) {
  const folder = useAppSelector((state) => state.folder);

  const openFile = () => {
    console.log('hi');
  };

  const getReadablePath = (): string => {
    const subStringArray = path.substr(folder.path.length).split('/');
    let readablePath = '';
    for (let i = 0; i < subStringArray.length - 1; i++) {
      if (subStringArray[i].length > 0) {
        readablePath += '/' + subStringArray[i][0];
      }
    }
    readablePath += '/' + subStringArray[subStringArray.length - 1];
    return readablePath;
  };
  return (
    <div
      onClick={openFile}
      className="relative h-full bg-activity-bg flex place-items-center justify-center cursor-pointer"
    >
      <img
        src={`file-protocol://getMediaFile/${path}`}
        className="object-cover max-h-full"
        alt=""
      />

      <div className="absolute text-xs p-1 bottom-2 left-0 bg-editor-bg text-editor-fg font-medium rounded-r-lg">
        {getReadablePath()}
      </div>
    </div>
  );
}
