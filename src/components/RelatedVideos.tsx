import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/youtubeApiContext';
import VideoCard, { VideoCardType } from './VideoCard';

type Props = {
  id: string;
};
export default function RelatedVideos({ id }: Props) {
  const youtube = useYoutubeApi()?.youtube;
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery<VideoCardType[]>(
    ['related', id],
    async () => youtube?.relatedVideos(id),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map(({ id, snippet }) => (
            <VideoCard key={id} id={id} snippet={snippet} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}
