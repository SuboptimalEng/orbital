import { VideoList } from './VideoList';
import { SearchBar } from './SearchBar';

const VideosDisplay = () => {
  return (
    <div className="w-full h-full">
      <SearchBar />
      <VideoList />
    </div>
  );
};

export { VideosDisplay };
