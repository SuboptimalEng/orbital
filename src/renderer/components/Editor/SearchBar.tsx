import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setQuery, toggleSortByName } from '../../store/searchSlice';

const SearchBar = () => {
  const { query } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-gray-600 h-24 px-16 shadow-2xl">
      <div className=" h-full flex place-items-center space-x-2 text-base text-activity-fg">
        <input
          type="text"
          value={query}
          placeholder="Search files by name"
          onChange={(e) => dispatch(setQuery(e.target.value))}
          className="bg-activity-bg border border-activity-fg rounded-lg text-activity-fg px-4 py-2 focus:outline-none"
        />
        <button
          onClick={() => dispatch(toggleSortByName())}
          className="border border-activity-fg px-2 rounded-lg"
        >
          Sort by Name
        </button>
      </div>
    </div>
  );
};

export { SearchBar };
