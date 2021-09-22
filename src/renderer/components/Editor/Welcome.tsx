const Welcome = () => {
  const openDirectory = () => {
    window.ipc.send('open-directory');
  };

  return (
    <div className="p-20">
      <div className="flex flex-col space-y-4">
        <div className="font-bold">Getting Started...</div>
        <div className="text-2xl flex flex-col place-items-start">
          <button onClick={openDirectory} className="hover:text-hyperlink">
            📁 Open a Folder
          </button>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://twitter.com/SuboptimalEng"
            className="hover:text-hyperlink"
          >
            🐦 Updates @SuboptimalEng
          </a>
        </div>
      </div>
    </div>
  );
};

export { Welcome };
