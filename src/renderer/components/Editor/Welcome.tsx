const Welcome = () => {
  const openDirectory = () => {
    window.ipc.send('open-directory');
  };

  const openExternal = () => {
    window.ipc.send('open-external', {
      url: 'http://twitter.com/SuboptimalEng',
    });
  };

  return (
    <div className="p-20">
      <div className="flex flex-col space-y-4">
        <div className="font-bold">Getting Started...</div>
        <div className="text-2xl flex flex-col place-items-start">
          <button onClick={openDirectory} className="hover:text-hyperlink">
            📁 Open a Folder
          </button>
          <button onClick={openExternal} className="hover:text-hyperlink">
            🐦 Updates @SuboptimalEng
          </button>
        </div>
      </div>
    </div>
  );
};

export { Welcome };
