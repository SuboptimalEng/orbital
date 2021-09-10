import { useAppSelector } from '../../store/hooks';
import { ActivityNameTypes, IActivity } from '../../types';

import { Search } from './Search';
import { Explorer } from './Explorer';
import { Settings } from './Settings';

const Sidebar = () => {
  const { activityBar } = useAppSelector((state) => state.activityBar);
  const sidebar = activityBar.find((activity) => activity.isActive);
  if (!sidebar) {
    return null;
  }

  const { icon, name }: IActivity = { ...sidebar };

  type sidebarDisplaysType = {
    [key in ActivityNameTypes]: JSX.Element;
  };

  // NOTE: This works.
  // interface ISidebarDisplays {
  //   [key: string]: JSX.Element;
  // }
  // NOTE: This works.
  // interface ISidebarDisplays {
  //   [key: string]: () => JSX.Element;
  // }

  // NOTE: Conditional rendering is hard to understand.
  // NOTE: Might be worth figuring this out at some point.
  const sidebarDisplays: sidebarDisplaysType = {
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
    <div className="text-white h-full border-r-2 border-green">
      <div className="w-full">{sidebarDisplay}</div>
    </div>
  );
};

export { Sidebar };
