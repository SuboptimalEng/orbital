import Files from './Files';
import SearchBar from './SearchBar';

export default function FileExplorer() {
  return (
    <div className="w-full h-full">
      <SearchBar />
      <Files />
    </div>
  );
}
