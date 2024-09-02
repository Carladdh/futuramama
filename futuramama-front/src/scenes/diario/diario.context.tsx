import { createContext, PropsWithChildren, useEffect } from "react";
import { News } from "../../core/models/news.interface";
import React from "react";
import { newsMock } from "../../core/mocks/news.mock";

interface DiarioContext {
  newsList: News[] | null;
}

export const DiarioContext = createContext<DiarioContext>({} as DiarioContext);

export const DiarioProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [newsList, setNewsList] = React.useState<News[] | null>(null);

  useEffect(() => {
    setNewsList(newsMock);
  }, []);

  return (
    <DiarioContext.Provider
      value={{
        newsList,
      }}
    >
      {children}
    </DiarioContext.Provider>
  );
};
