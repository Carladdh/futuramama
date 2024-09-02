import { createContext, PropsWithChildren, useEffect } from "react";
import { News } from "../../core/models/news.interface";
import React from "react";

import { AxiosGet } from "../../core/api/axios.service";

interface AlimentacionContext {
  newsList: News[] | null;
}

export const AlimentacionContext = createContext<AlimentacionContext>(
  {} as AlimentacionContext
);

export const AlimentacionProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [newsList, setNewsList] = React.useState<News[] | null>(null);

  const apiService = async () => {
    await AxiosGet("/feeding")
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
    <AlimentacionContext.Provider
      value={{
        newsList,
      }}
    >
      {children}
    </AlimentacionContext.Provider>
  );
};
