import { useAppSelector } from '../../store/hooks';

const StatusBar = () => {
  const { path } = useAppSelector((state) => state.folder);

  const openDirectory = () => {
    window.ipc.send('open-directory');
  };

  return (
    <div className="bg-activity-bg border-t-2 border-green h-8 text-lg content-center">
      <div className="flex justify-between h-full place-items-center">
        <button onClick={openDirectory} className="px-4 hover:bg-sidebar-bg">
          📁 {path.length > 0 ? path : 'n/a'}
        </button>
        <div className="px-4 hover:bg-sidebar-bg">Check For Updates</div>
      </div>
    </div>
  );
};

export { StatusBar };
