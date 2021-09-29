import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { enableActivity } from '../../store/activityBarSlice';

import { Welcome } from './Welcome';
import { Settings } from './Settings';
import { VideoList } from './VideoList';
import { SearchBar } from './SearchBar';
// import { IActivity, ActivityNameTypes } from '../../types';

const Editor = () => {
  const dispatch = useAppDispatch();
  const { path } = useAppSelector((state) => state.folder);
  const { activityBar } = useAppSelector((state) => state.activityBar);

  let activatedActivity = activityBar.find((activity) => activity.isActive);
  if (!activatedActivity) {
    dispatch(enableActivity(activityBar[0].name));
    activatedActivity = activityBar[0];
  }

  // NOTE: Type example.
  // type sidebarDisplaysType = {
  //   [key in ActivityNameTypes]: JSX.Element;
  // };

  // NOTE: This works.
  // interface ISidebarDisplays {
  //   [key: string]: JSX.Element;
  // }

  interface ISidebarDisplays {
    [key: string]: () => JSX.Element;
  }

  // NOTE: Conditional rendering is hard to understand.
  // NOTE: Might be worth figuring this out at some point.
  const sidebarDisplays: ISidebarDisplays = {
    explorer: () => {
      if (path.length === 0) {
        return <Welcome />;
      }
      return (
        <div>
          <SearchBar />
          <VideoList />
        </div>
      );
    },
    settings: () => <Settings />,
  };

  const sidebarDisplay = sidebarDisplays[activatedActivity.name];

  return (
    <div className="bg-editor-bg text-editor-fg h-full">{sidebarDisplay()}</div>
  );
};

export { Editor };
