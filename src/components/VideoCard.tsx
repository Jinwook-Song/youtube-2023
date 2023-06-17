import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';
import { cls } from '../util/utils';

type ThumbnailType = {
  url: string;
  width: number;
  height: number;
};

type VideoSnippetType = {
  title: string;
  publishedAt: string;
  thumbnails: {
    default: ThumbnailType;
    medium: ThumbnailType;
    high: ThumbnailType;
  };
  channelTitle: string;
  channelId: string;
  description: string;
};

export type VideoCardType = {
  id: string;
  snippet: VideoSnippetType;
  type?: 'list';
};

export default function VideoCard({ id, snippet, type }: VideoCardType) {
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const navigate = useNavigate();
  return (
    <li
      className={cls(type === 'list' ? 'flex gap-4 m-2' : '')}
      onClick={() =>
        navigate(`/videos/watch/${id}`, {
          state: { video: { id, snippet } },
        })
      }
    >
      <img
        className={cls('object-cover', type === 'list' ? 'w-60' : 'w-full')}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
