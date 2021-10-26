import { IFile } from '../../../types';
import { useAppSelector } from '../../../store/hooks';
import Hightlighter from 'react-highlight-words';

export default function ImageCard({ path }: IFile) {
  const folder = useAppSelector((state) => state.folder);
  const { query } = useAppSelector((state) => state.explorer);

  const getReadablePath = (): string => {
    return path.substr(folder.path.length + 1);
  };

  return (
    <div className="relative h-full w-full flex place-items-center justify-center bg-card-bg cursor-pointer">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center place-items-center">
        <img
          src={`file-protocol://getMediaFile/${path}`}
          className="object-cover w-full h-full"
          draggable={true}
          alt=""
        />
      </div>

      <div className="absolute text-sm px-1 bottom-2 left-0 max-w-full bg-editor-bg text-editor-fg place-items-center">
        <div className="truncate">
          <Hightlighter
            searchWords={[query]}
            textToHighlight={getReadablePath()}
          />
        </div>
      </div>
    </div>
  );
}
