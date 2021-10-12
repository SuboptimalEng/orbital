import { IFile } from '../../../types';

export default function ImagePreview({ path }: IFile) {
  return (
    <img
      id={path}
      src={`file-protocol://getMediaFile/${path}`}
      className="object-contain max-w-full max-h-full border border-preview-fg"
      alt=""
    />
  );
}
