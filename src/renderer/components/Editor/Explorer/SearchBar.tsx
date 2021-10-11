import { setQuery } from '../../../store/explorerSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const { query } = useAppSelector((state) => state.explorer);

  return (
    <div className="bg-search-bg text-search-fg h-24 px-16 shadow-2xl">
      <div className=" h-full flex place-items-center space-x-2 ">
        <input
          type="text"
          value={query}
          placeholder="Search files by name"
          onChange={(e) => dispatch(setQuery(e.target.value))}
          className="bg-search-bg w-full py-2 focus:outline-none"
        />
      </div>
    </div>
  );
}
