import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFolderIsLoading } from '../../store/folderSlice';
import { FaFolderPlus } from 'react-icons/fa';
export default function StatusBar() {
  const dispatch = useAppDispatch();
  const { path } = useAppSelector((state) => state.folder);

  const openDirectory = () => {
    dispatch(setFolderIsLoading(true));
    window.ipc.send('open-directory');
  };

  return (
    <div className="bg-status-bg text-status-fg h-8 text-lg  px-2 content-center">
      <div className="flex justify-start h-full place-items-center">
        <button
          onClick={openDirectory}
          className="px-2 font-medium hover:bg-status-hover"
        >
          <FaFolderPlus className="inline" /> {path.length > 0 ? path : 'n/a'}
        </button>
        {/* <div className="px-2 font-medium hover:bg-status-hover">
          🔄 Check For Updates
        </div> */}
      </div>
    </div>
  );
}
