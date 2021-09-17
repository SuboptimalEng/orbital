import { SidebarHeader } from '../Base/SidebarHeader';

const Explorer = () => {
  const openDirectory = () => {
    window.ipc.send('open-directory');
  };

  return (
    <div className="flex flex-col">
      <SidebarHeader title="Explorer" />
      <button className="border p-2 rounded" onClick={() => openDirectory()}>
        Select Folder
      </button>
    </div>
  );
};

export { Explorer };
