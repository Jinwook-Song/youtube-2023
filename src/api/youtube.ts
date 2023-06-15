import axios, { AxiosInstance } from 'axios';

export default class Youtube {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async search(keyword?: string) {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
  }

  private async searchByKeyword(keyword: string) {
    return this.httpClient
      .get('search', {
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
    return this.httpClient
      .get('videos', {
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
}
