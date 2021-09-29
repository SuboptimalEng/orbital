import { IActivity } from '../../types';
import { enableActivity } from '../../store/activityBarSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const ActivityBar = () => {
  const dispatch = useAppDispatch();
  const { activityBar } = useAppSelector((state) => state.activityBar);

  return (
    <div className="flex flex-col place-items-center h-full bg-activity-bg">
      {activityBar.map((activity: IActivity) => {
        return (
          <div
            className="flex w-full place-items-center"
            key={activity.name}
            onClick={() => dispatch(enableActivity(activity.name))}
          >
            <button className="w-full text-center">
              <div
                className={
                  activity.isActive
                    ? 'py-2 bg-activity-active'
                    : 'py-2 hover:bg-activity-hover'
                }
              >
                {activity.icon}
                {activity.isActive}
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export { ActivityBar };
