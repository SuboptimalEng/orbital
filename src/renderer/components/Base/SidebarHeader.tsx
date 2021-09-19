const SidebarHeader = (props: { title: string }) => {
  return (
    <div>
      <div className="text-lg font-black uppercase">{props.title}</div>
    </div>
  );
};

export { SidebarHeader };
