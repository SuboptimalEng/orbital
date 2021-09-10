import { useAppSelector } from '../store/hooks';

const Editor = () => {
  const { path, files } = useAppSelector((state) => state.folder);

  return (
    <div className="m-4">
      <div className="border p-2 rounder">
        {path.length > 0 ? path : 'Editor'}
      </div>
      <div className="flex flex-row flex-wrap justify-between">
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

export { Editor };
