import { IActivity } from '../../types/index';
import { Search } from './Search';
import { Explorer } from './Explorer';
import { Settings } from './Settings';

const Sidebar = ({ name, icon, isActive }: IActivity) => {
  interface ISidebarDisplays {
    [key: string]: JSX.Element;
  }

  // NOTE: This works.
  // interface ISidebarDisplays {
  //   [key: string]: () => JSX.Element;
  // }

  // NOTE: Conditional rendering is hard to understand.
  // NOTE: Might be worth figuring this out at some point.
  const sidebarDisplays: ISidebarDisplays = {
    search: <Search icon={icon} />,
    explorer: <Explorer icon={icon} />,
    settings: <Settings icon={icon} />,
    // NOTE: This works.
    // search: () => <Search icon={icon} />,
    // explorer: () => <Explorer icon={icon} />,
    // settings: () => <Settings icon={icon} />,
  };

  const sidebarDisplay = sidebarDisplays[name];

  return (
    <div className="text-white h-full w-96 border-r-2 border-green">
      <div className="w-full p-4">{sidebarDisplay}</div>
    </div>
  );
};

export { Sidebar };
