import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { enableActivity } from '../../store/activityBarSlice';

import { Welcome } from './Welcome';
import { Settings } from './Settings';
import { VideoList } from './VideoList';
import { SearchBar } from './SearchBar';

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
  // type editorDisplaysType = {
  //   [key in ActivityNameTypes]: () => JSX.Element;
  // };

  // NOTE: Interface example.
  interface IEditorDisplays {
    [key: string]: () => JSX.Element;
  }

  // NOTE: Conditional rendering is hard to understand.
  // NOTE: Might be worth figuring this out at some point.
  const editorDisplays: IEditorDisplays = {
    explorer: () => {
      return path.length === 0 ? (
        <Welcome />
      ) : (
        <div>
          <SearchBar />
          <VideoList />
        </div>
      );
    },
    settings: () => <Settings />,
  };

  const editorDisplay = editorDisplays[activatedActivity.name];

  return (
    <div className="bg-editor-bg text-editor-fg h-full">{editorDisplay()}</div>
  );
};

export { Editor };
