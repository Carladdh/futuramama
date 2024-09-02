import { createContext, PropsWithChildren, useEffect } from "react";
import { News } from "../../core/models/news.interface";
import React from "react";

import { AxiosGet } from "../../core/api/axios.service";

interface MamaContext {
  newsList: News[] | null;
}

export const MamaContext = createContext<MamaContext>({} as MamaContext);

export const MamaProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [newsList, setNewsList] = React.useState<News[] | null>(null);

  const apiService = async () => {
    await AxiosGet("/mommy")
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
    <MamaContext.Provider
      value={{
        newsList,
      }}
    >
      {children}
    </MamaContext.Provider>
  );
};
