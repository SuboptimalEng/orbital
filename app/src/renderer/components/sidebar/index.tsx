import { IActivity } from '../../types/index';
import { Explorer } from './Explorer';
import { Search } from './Search';
import { Settings } from './Settings';

const Sidebar = ({ name, icon, isActive }: IActivity) => {
  interface ISidebarDisplays {
    [key: string]: (icon: string) => JSX.Element;
  }

  const sidebarDisplays: ISidebarDisplays = {
    search: Search,
    explorer: Explorer,
    settings: Settings,
  };

  const sidebar = sidebarDisplays[name];

  return (
    <div className="text-white h-full w-96 border-r-2 border-green">
      <div className="w-full p-4">{sidebar(icon)}</div>
    </div>
  );
};

export { Sidebar };
