import { createContext, PropsWithChildren, useEffect } from "react";
import { News } from "../../core/models/news.interface";
import React from "react";

import { AxiosGet } from "../../core/api/axios.service";

interface HomeContext {
  newsList: News[] | null;
}

export const HomeContext = createContext<HomeContext>({} as HomeContext);

export const HomeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [newsList, setNewsList] = React.useState<News[] | null>(null);

  const apiService = async () => {
    await AxiosGet("/home")
      .then((res) => {
        console.log(res);
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
    <HomeContext.Provider
      value={{
        newsList,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
