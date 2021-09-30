import VideoList from './VideoList';
import SearchBar from './SearchBar';

export default function MediaDisplay() {
  return (
    <div className="w-full h-full">
      <SearchBar />
      <VideoList />
    </div>
  );
}
