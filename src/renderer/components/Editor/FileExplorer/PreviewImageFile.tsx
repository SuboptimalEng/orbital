import { IFile } from '../../../types';

export default function PreviewImageFile({ path, name, ctime }: IFile) {
  const openFile = () => {
    console.log('hi');
  };
  return (
    <div
      onClick={openFile}
      className="h-full bg-activity-bg flex place-items-center justify-center cursor-pointer"
    >
      <img
        src={`file-protocol://getMediaFile/${path}`}
        className="object-contain max-h-full"
        alt=""
      />
    </div>
  );
}
