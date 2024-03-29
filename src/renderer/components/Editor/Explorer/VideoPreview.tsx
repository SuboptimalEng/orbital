import { IFile } from '../../../types';

export default function VideoPreview({ path }: IFile) {
  return (
    <video
      id={path}
      typeof="video/ogg"
      src={`file-protocol://getMediaFile/${path}`}
      className="object-contain max-w-full max-h-full bg-card-bg focus:outline-none"
      controls
    />
  );
}
