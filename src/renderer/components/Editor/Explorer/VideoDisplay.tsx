import { IFile } from '../../../types';

export default function VideoDisplay({ path, name, ctime }: IFile) {
  return (
    <video
      id={path}
      src={`file-protocol://getMediaFile/${path}`}
      typeof="video/ogg"
      className="w-full max-h-full"
      controls
    />
  );
}
