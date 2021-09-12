import { useAppSelector } from '../../store/hooks';
import { IFile } from '../../types';

const Editor = () => {
  const { numOfCols } = useAppSelector((state) => state.settings);
  const { path, files } = useAppSelector((state) => state.folder);

  return (
    <div className="absolute inset-0 overflow-y-auto p-2">
      <div className="border-2 border-green rounded-lg p-2 mb-4">
        {path.length > 0 ? path : 'Editor'}
      </div>
      <div className={`grid grid-cols-${numOfCols} gap-8`}>
        {files.map((file: IFile) => {
          return (
            <div
              className="flex flex-col border-2 border-green rounded-lg"
              key={`file-protocol://getMediaFile/${file.path}`}
            >
              <video
                src={`file-protocol://getMediaFile/${file.path}`}
                className="rounded-t-lg"
              />
              <div className="text-xs p-2">{file.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Editor };
