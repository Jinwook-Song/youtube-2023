import React, { createContext, useContext } from 'react';
import MockYoutube from '../api/mockYoutube';
import Youtube from '../api/youtube';

const youtube = new MockYoutube();
// const youtube = new Youtube();

export const YoutubeApiContext = createContext<
  { youtube: Youtube | MockYoutube } | undefined
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
