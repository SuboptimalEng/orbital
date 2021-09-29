import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setQuery, toggleSortByName } from '../../store/searchSlice';

const SearchBar = () => {
  const { query } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-activity-bg h-full px-8">
      <div className="flex space-x-2 text-base text-activity-fg p-2">
        <input
          type="text"
          value={query}
          placeholder="Search files by name"
          onChange={(e) => dispatch(setQuery(e.target.value))}
          className="bg-activity-bg border text-activity-fg w-full p-1 focus:outline-none"
        />
        <button
          onClick={() => dispatch(toggleSortByName())}
          className="border-2 border-activity-bg"
        >
          Sort by Name
        </button>
      </div>
    </div>
  );
};

export { SearchBar };
