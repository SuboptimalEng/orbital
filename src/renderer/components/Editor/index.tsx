import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { enableActivity } from '../../store/activityBarSlice';

import Welcome from './Welcome';
import Settings from './Settings';
import Explorer from './Explorer';

export default function Editor() {
  const dispatch = useAppDispatch();
  const { path } = useAppSelector((state) => state.folder);
  const { activityBar } = useAppSelector((state) => state.activityBar);

  let activatedActivity = activityBar.find((activity) => activity.isActive);

  // NOTE: By default, select the 'explorer' view.
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
    settings: () => <Settings />,
    explorer: () => (path.length === 0 ? <Welcome /> : <Explorer />),
  };
  const editorDisplay = editorDisplays[activatedActivity.name];

  return (
    <div className="bg-editor-bg text-editor-fg h-full">{editorDisplay()}</div>
  );
}
