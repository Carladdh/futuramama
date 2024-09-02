import React, { PropsWithChildren, useEffect } from "react";
import { createContext } from "react";
import { News } from "../../core/models/news.interface";

import { AxiosGet } from "../../core/api/axios.service";

interface BebeContext {
  newsList: News[] | null;
}

export const BebeContext = createContext<BebeContext>({} as BebeContext);

export const BebeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [newsList, setNewsList] = React.useState<News[] | null>(null);
  const apiService = async () => {
    await AxiosGet("/babies")
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
    <BebeContext.Provider
      value={{
        newsList,
      }}
    >
      {children}
    </BebeContext.Provider>
  );
};
