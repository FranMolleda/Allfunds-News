import React, { useState, useEffect, useContext } from "react";
import { NewsContext } from "../../context/newsContext";
import { Card, Button, Container } from "react-bootstrap";
import {
  GetStoredNews,
  DeleteStoredNews,
} from "../../controllers/newsController";
import NewsForm from "./NewsForm";
import { useNavigate } from "react-router-dom";
import { PostStoredArchives } from "../../controllers/archivesController";

const News = () => {
  const {
    news,
    storednews,
    archivednewstored,
    newxidx,
    setNews,
    setStoredNews,
    setArchivedNews,
    setArchivedStored,
    setNewsIdx,
  } = useContext(NewsContext);

  const [reloadnews, setReloadNews] = useState(0);
  const redirectArchives = useNavigate();

  useEffect(() => {
    const getNews = () => {
      GetStoredNews(setStoredNews);
      setReloadNews(reloadnews);
    };
    getNews();

    let mounted = true;
    return function cleanup() {
      mounted = false;
    };
  }, [reloadnews, setStoredNews]);

  const handleArchiveButton = (report) => {
    try {
      setArchivedNews(report);
      setArchivedStored([...archivednewstored, report]);
      DeleteStoredNews(report._id);
      PostStoredArchives(report);
      redirectArchives("/archives");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1 className="mt-5 text-center text-secondary">News</h1>
      <NewsForm
        news={news}
        storednews={storednews}
        newxidx={newxidx}
        setNews={setNews}
        reloadnews={reloadnews}
        setStoredNews={setStoredNews}
        setReloadNews={setReloadNews}
        setNewsIdx={setNewsIdx}
      />
      {storednews.length > 0 ? (
        storednews.map((report) => (
          <Card className="mb-5 mt-3" key={report._id}>
            <Card.Header as="h5">{report.title}</Card.Header>
            <Card.Body>
              <Card.Title>{report.description}</Card.Title>
              <Card.Text>{report.content}</Card.Text>
              <footer className="blockquote-footer mt-4">
                Written by: <cite title="Source Title">{report.author}</cite>
              </footer>
              <Button
                variant="secondary"
                onClick={() => handleArchiveButton(report)}
              >
                Archive
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h2 className="mt-5 text-center text-secondary">No News yet</h2>
      )}
    </Container>
  );
};

export default News;
