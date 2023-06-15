import React, { createContext, useContext } from 'react';
import MockYoutubeClient from '../api/mockYoutubeClient';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';

let client: MockYoutubeClient | YoutubeClient;

client = new MockYoutubeClient();
client = new YoutubeClient();

const youtube = new Youtube(client);

export const YoutubeApiContext = createContext<
  { youtube: Youtube } | undefined
>(undefined);

export function YoutubeApiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

// youtube instance 제공
export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
