import { VideoList } from './VideoList';
import { SearchBar } from './SearchBar';

const VideosDisplay = () => {
  return (
    <div className="w-full h-full">
      <div className="absolute top-0 left-0 right-0 h-24">
        <SearchBar />
      </div>
      <VideoList />
    </div>
  );
};

export { VideosDisplay };
