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
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-2/3'>
        <iframe
          title={title}
          id='player'
          width={'100%'}
          height={640}
          src={`https://www.youtube.com/embed/${id}`}
        />
        <div className='p-8'>
          <h2 className='text-xl font-semibold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
      </article>
      <section className='basis-1/3'>
        <RelatedVideos id={id} />
      </section>
    </section>
  );
}
