import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard, { VideoCardType } from '../components/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery<VideoCardType[]>(['videos', keyword], async () => {
    return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.json())
      .then((data) => data.items);
  });
  return (
    <>
      <div>Videos {keyword ?? '🌟'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map(({ id, snippet }) => (
            <VideoCard key={id} id={id} snippet={snippet} />
          ))}
        </ul>
      )}
    </>
  );
}
