import { createContext, useState } from "react";

export const NewsContext = createContext();

const NewsProvider = (props) => {
  const [news, setNews] = useState({
    id: "",
    title: "",
    description: "",
    content: "",
    author: "",
  });

  const [storednews, setStoredNews] = useState([]);

  const [archivednews, setArchivedNews] = useState({
    id: "",
    title: "",
    description: "",
    content: "",
    author: "",
  });

  const [archivednewstored, setArchivedNewsStored] = useState([]);

  return (
    <NewsContext.Provider
      value={{
        news,
        archivednews,
        storednews,
        archivednewstored,
        setNews,
        setArchivedNews,
        setStoredNews,
        setArchivedNewsStored,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
