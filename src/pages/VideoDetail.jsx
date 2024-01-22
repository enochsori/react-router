import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  const { videoId } = useParams();

  return (
    <>
      <h1>Video detail Page</h1>
      <div>{videoId}</div>
    </>
  );
}
