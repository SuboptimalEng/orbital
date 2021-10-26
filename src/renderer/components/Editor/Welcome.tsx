import { useAppDispatch } from '../../store/hooks';
import { setFolderIsLoading } from '../../store/folderSlice';
import { HiFolderAdd } from 'react-icons/hi';
import { BsTwitter } from 'react-icons/bs';

export default function Welcome() {
  const dispatch = useAppDispatch();

  const openDirectory = () => {
    dispatch(setFolderIsLoading(true));
    window.ipc.send('open-directory');
  };

  const openExternal = () => {
    window.ipc.send('open-external', {
      url: 'http://twitter.com/SuboptimalEng',
    });
  };

  return (
    <div className="p-20">
      <div className="flex flex-col space-y-4">
        <div className="font-bold">Getting Started...</div>
        <div className="text-xl flex flex-row space-x-5">
          <div className="">
            <button
              onClick={openDirectory}
              className="transition-all duration-500 flex flex-col justify-center items-center space-y-5 w-64 bg-orange p-5 h-64 rounded-lg hover:text-hyperlink"
            >
              <HiFolderAdd className="text-9xl" />
            </button>
            <span>Open a Folder</span>
          </div>
          <div>
            <button
              onClick={openExternal}
              className="transition-all duration-500 flex flex-col justify-center items-center space-y-5 w-64 bg-activity-fg p-5 h-64 rounded-lg hover:text-hyperlink"
            >
              <BsTwitter className="text-7xl" />
            </button>
            <span>DM me @SuboptimalEng</span>
          </div>
        </div>
      </div>
    </div>
  );
}
