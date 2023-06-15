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
  } = useQuery(['channel', id], async () => youtube?.channelImageURL(id));

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{`Something wrong ${error}`}</p>}
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}
