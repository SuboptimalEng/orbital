import { SidebarHeader } from '../Base/SidebarHeader';

const Explorer = () => {
  const selectFolder = () => {
    window.ipc.send('select-dirs');
  };

  return (
    <div className="flex flex-col">
      <SidebarHeader title="Explorer" />
      <button className="border p-2 rounded" onClick={() => selectFolder()}>
        Select Folder
      </button>
    </div>
  );
};

export { Explorer };
