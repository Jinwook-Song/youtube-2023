import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/youtubeApiContext';

type Props = {
  id: string;
  name: string;
};
export default function ChannelInfo({ id, name }: Props) {
  const youtube = useYoutubeApi()?.youtube;
  const {
    data: url,
    isLoading,
    error,
  } = useQuery(['channel', id], async () => youtube?.channelImageURL(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className='flex mt-4 mb-8 items-center'>
      {isLoading && <p>Loading...</p>}
      {error && <p>{`Something wrong ${error}`}</p>}
      {url && <img className='w-10 h-10 rounded-full' src={url} alt={name} />}
      <p className='text-lg font-medium ml-2'>{name}</p>
    </div>
  );
}
