import { createContext, PropsWithChildren, useEffect } from "react";
import { News } from "../../core/models/news.interface";
import React from "react";
import { AxiosGet } from "../../core/api/axios.service";

interface MommyContext {
  newsList: News[] | null;
}

export const MommyContext = createContext<MommyContext>({} as MommyContext);

export const MommyProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [newsList, setNewsList] = React.useState<News[] | null>(null);

  const apiService = async () => {
    await AxiosGet("/mommy")
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
    <MommyContext.Provider
      value={{
        newsList,
      }}
    >
      {children}
    </MommyContext.Provider>
  );
};
