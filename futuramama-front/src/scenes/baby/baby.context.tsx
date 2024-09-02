import React, { PropsWithChildren, useEffect } from "react";
import { createContext } from "react";
import { News } from "../../core/models/news.interface";

import { AxiosGet } from "../../core/api/axios.service";

interface BabyContext {
  newsList: News[] | null;
}

export const BabyContext = createContext<BabyContext>({} as BabyContext);

export const BabyProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [newsList, setNewsList] = React.useState<News[] | null>(null);
  const apiService = async () => {
    await AxiosGet("/babies")
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
    <BabyContext.Provider
      value={{
        newsList,
      }}
    >
      {children}
    </BabyContext.Provider>
  );
};
