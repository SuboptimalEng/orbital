import { useAppSelector } from '../../store/hooks';

const StatusBar = () => {
  const { path } = useAppSelector((state) => state.folder);

  const openDirectory = () => {
    window.ipc.send('open-directory');
  };

  return (
    <div className="bg-status-bg text-status-fg h-8 text-lg  px-2 content-center">
      <div className="flex justify-between h-full place-items-center">
        <button
          onClick={openDirectory}
          className="px-2 font-medium hover:bg-status-hover"
        >
          📁 {path.length > 0 ? path : 'n/a'}
        </button>
        <div className="px-2 font-medium hover:bg-status-hover">
          🔄 Check For Updates
        </div>
      </div>
    </div>
  );
};

export { StatusBar };
