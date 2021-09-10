const Explorer = (props: { icon: string }) => {
  const selectFolder = () => {
    window.ipc.send('select-dirs');
  };

  return (
    <div>
      {props.icon}
      <button className="border p-2 rounded" onClick={() => selectFolder()}>
        Select Folder
      </button>
    </div>
  );
};

export { Explorer };
