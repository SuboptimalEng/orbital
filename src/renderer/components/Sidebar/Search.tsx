import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setQuery } from '../../store/searchSlice';
import { SidebarHeader } from '../Base/SidebarHeader';

const Search = () => {
  const { query } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  return (
    <div>
      <SidebarHeader title="Search" />
      <input
        type="text"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
        className="bg-activity-bg text-activity-fg text-base w-full p-1 focus:outline-none"
      />
    </div>
  );
};

export { Search };
