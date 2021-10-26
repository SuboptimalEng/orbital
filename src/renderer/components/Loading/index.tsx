export default function Loading() {
  return (
    <div className="absolute inset-0 bg-editor-bg text-editor-fg">
      <div className="flex place-items-center justify-center space-x-2 w-full h-full">
        <div className="animate-spin-slow">🕛</div>
        <div className="text-2xl font-medium">Loading...</div>
      </div>
    </div>
  );
}
