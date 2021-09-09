import { useAppSelector } from '../../store/hooks';

const Explorer = (props: { icon: string }) => {
  const { path, files } = useAppSelector((state) => state.folder);

  const selectFolder = () => {
    window.ipc.send('select-dirs');
  };

  return (
    <div>
      {props.icon}
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

export { Explorer };
