import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setQuery, toggleSortByName } from '../../store/searchSlice';

const SearchBar = () => {
  const { query } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex flex-col space-y-2 my-2 text-base">
        <input
          type="text"
          value={query}
          placeholder="Search files by name"
          onChange={(e) => dispatch(setQuery(e.target.value))}
          className="bg-activity-bg text-activity-fg w-full p-1 focus:outline-none"
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
