import { IActivity } from '../types';
import { activate } from '../store/activityBarSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const ActivityBar = () => {
  const dispatch = useAppDispatch();
  const { activityBar } = useAppSelector((state) => state.activityBar);

  return (
    <div className="flex flex-col h-full border-r-2 border-green bg-activity-bg">
      {activityBar.map((activity: IActivity) => {
        return (
          <div
            className="flex"
            key={activity.name}
            onClick={() => dispatch(activate(activity.name))}
          >
            <div
              className={
                activity.isActive ? 'p-4 bg-green' : 'p-4 hover:bg-sidebar-bg'
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
