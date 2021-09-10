import { useAppSelector } from '../../store/hooks';
import { IFile } from '../../types';

const Editor = () => {
  const { path, files } = useAppSelector((state) => state.folder);

  return (
    <div className="absolute inset-0 overflow-y-auto p-4">
      <div className="border rounder">{path.length > 0 ? path : 'Editor'}</div>
      <div className="grid grid-cols-2 gap-4">
        {files.map((file: IFile) => {
          return (
            <div
              className="flex flex-col border"
              key={`file-protocol://getMediaFile/${file.path}`}
            >
              <video src={`file-protocol://getMediaFile/${file.path}`} />
              <div className="text-xs p-2 border">{file.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Editor };
