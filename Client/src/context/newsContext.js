import React, { createContext, useState } from "react";

export const NewsContext = createContext();

const NewsProvider = (props) => {
  const [news, setNews] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
  });

  const [storednews, setStoredNews] = useState([]);

  const [archivednews, setArchivedNews] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
  });

  const [archivednewstored, setArchivedNewStored] = useState([]);

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
        setArchivedNewStored,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
