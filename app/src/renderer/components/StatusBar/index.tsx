import { useAppSelector } from '../../store/hooks';

const StatusBar = () => {
  const { path } = useAppSelector((state) => state.folder);

  return (
    <div className="bg-activity-bg border-t-2 border-green h-8 text-lg">
      <div className="h-full flex place-items-center justify-between">
        <div className="px-4 h-full hover:bg-sidebar-bg">
          <div>📁 {path.length > 0 ? path : 'n/a'}</div>
        </div>
        <div className="px-4 h-full hover:bg-sidebar-bg">Check For Updates</div>
      </div>
    </div>
  );
};

export { StatusBar };
