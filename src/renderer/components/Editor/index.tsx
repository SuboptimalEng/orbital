import { useAppSelector } from '../../store/hooks';
import { VideoList } from './VideoList';
import { Welcome } from './Welcome';

const Editor = () => {
  const { path } = useAppSelector((state) => state.folder);

  return (
    <div className="bg-editor-bg text-editor-fg h-full">
      {path.length === 0 ? <Welcome /> : <VideoList />}
    </div>
  );
};

export { Editor };
