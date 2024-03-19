import { Modal } from './modal';

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  console.log('rendering user', photoId);
  return <Modal>{photoId}</Modal>;
}
