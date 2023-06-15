import { formatAgo } from '../util/date';

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
};

export type VideoCardType = {
  id: string;
  snippet: VideoSnippetType;
};

export default function VideoCard({ snippet }: VideoCardType) {
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <li>
      <img
        className='w-full object-cover'
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
