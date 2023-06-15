import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
import { VideoCardType } from '../components/VideoCard';

export default function VideoDetail() {
  const {
    id,
    snippet: { title, channelId, channelTitle, description },
  } = useLocation().state?.video as VideoCardType;
  return (
    <section>
      <article>
        <iframe
          title={title}
          id='player'
          width={'100%'}
          height={640}
          src={`https://www.youtube.com/embed/${id}`}
        />
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <section>
        <RelatedVideos id={id} />
      </section>
    </section>
  );
}
