import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  activateActivityBar,
  deactivateActivityBar,
} from '../store/activityBarSlice';

const ActivityBar = () => {
  const dispatch = useAppDispatch();
  const { activityBar } = useAppSelector((state) => state.activityBar);

  return (
    <div className="flex flex-col h-full border-r-4 border-green bg-activity-bg">
      <button onClick={() => dispatch(activateActivityBar())}>Activate</button>
      <button onClick={() => dispatch(deactivateActivityBar())}>
        Deactivate
      </button>
      {activityBar.map((activity) => {
        return (
          <div className="flex" key={activity.name}>
            <div
              className={
                activity.isActive
                  ? 'p-4 hover:bg-sidebar-bg bg-green'
                  : 'p-4 hover:bg-sidebar-bg bg-red'
              }
            >
              {activity.icon}
              {activity.isActive}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { ActivityBar };
