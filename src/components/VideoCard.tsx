type VideoSnippetType = {
  title: string;
};

export type VideoCardType = {
  id: string;
  snippet: VideoSnippetType;
};
export default function VideoCard({ snippet }: VideoCardType) {
  return <div>{snippet.title}</div>;
}
