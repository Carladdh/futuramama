import { createContext, PropsWithChildren, useEffect } from "react";
import { News } from "../../core/models/news.interface";
import React from "react";

import { AxiosGet } from "../../core/api/axios.service";

interface FeedingContext {
  newsList: News[] | null;
}

export const FeedingContext = createContext<FeedingContext>(
  {} as FeedingContext
);

export const FeedingProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [newsList, setNewsList] = React.useState<News[] | null>(null);

  const apiService = async () => {
    await AxiosGet("/feeding")
      .then((res) => {
        setNewsList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    apiService();
  }, []);

  return (
    <FeedingContext.Provider
      value={{
        newsList,
      }}
    >
      {children}
    </FeedingContext.Provider>
  );
};
