import MockYoutubeClient from './mockYoutubeClient';
import YoutubeClient from './youtubeClient';

export default class Youtube {
  constructor(private readonly apiClient: YoutubeClient | MockYoutubeClient) {}

  async search(keyword?: string) {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
  }

  async channelImageURL(id: string) {
    return this.apiClient
      .channels({
        params: {
          part: 'snippet',
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id: string) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          relatedToVideoId: id,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: any) => ({
          ...item,
          id: item.id.videoId || item.id.channelId,
        }))
      );
  }

  private async searchByKeyword(keyword: string) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: any) => ({
          ...item,
          id: item.id.videoId || item.id.channelId,
        }))
      );
  }
  private async mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
}
