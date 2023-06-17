import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard, { VideoCardType } from '../components/VideoCard';
import { useYoutubeApi } from '../context/youtubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const youtube = useYoutubeApi()?.youtube;
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery<VideoCardType[]>(
    ['videos', keyword],
    async () => youtube?.search(keyword),
    {
      staleTime: 1000 * 60 * 1,
    }
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-2 gap-y-4'>
          {videos.map(({ id, snippet }) => (
            <VideoCard key={id} id={id} snippet={snippet} />
          ))}
        </ul>
      )}
    </>
  );
}
