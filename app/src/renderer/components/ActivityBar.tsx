import { IActivity } from '../types/index';
import { toggleActivity } from '../store/activityBarSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const ActivityBar = () => {
  const dispatch = useAppDispatch();
  const { activityBar } = useAppSelector((state) => state.activityBar);

  return (
    <div className="flex flex-col place-items-center h-full border-r-2 border-green bg-activity-bg">
      {activityBar.map((activity: IActivity) => {
        return (
          <div
            className="flex w-full place-items-center"
            key={activity.name}
            onClick={() => dispatch(toggleActivity(activity.name))}
          >
            <div className="w-full  text-center">
              <div
                className={
                  activity.isActive
                    ? 'py-2 bg-green'
                    : 'py-2 hover:bg-sidebar-bg'
                }
              >
                {activity.icon}
                {activity.isActive}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { ActivityBar };
