import { IActivity } from '../types';

const Sidebar = ({ name, icon, isActive }: IActivity) => {
  return (
    <div className="text-white h-full w-80 border-r-2 border-green">
      <div className="w-full p-4">{icon}</div>
    </div>
  );
};

export { Sidebar };
