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
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, 'ja')}</p>
      </div>
    </li>
  );
}
