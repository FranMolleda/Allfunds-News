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
    setNews,
    storednews,
    setStoredNews,
    archivednews,
    setArchivedNews,
    archivednewstored,
    setArchivedNewStored,
  } = useContext(NewsContext);

  const [reloadnews, setReloadNews] = useState(0);
  const redirectArchives = useNavigate();

  useEffect(() => {
    const getNews = () => {
      GetStoredNews(setStoredNews);
    };
    getNews();
  }, [reloadnews, setStoredNews]);

  const handleArchiveButton = async (report) => {
    try {
      await setArchivedNews(report);
      await setArchivedNewStored([...archivednewstored, report]);
      DeleteStoredNews(report._id);
      redirectArchives("/archives");
      await PostStoredArchives(report);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(archivednewstored);
  console.log(archivednews);

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>News</h1>
      <NewsForm
        news={news}
        storednews={storednews}
        setNews={setNews}
        reloadnews={reloadnews}
        setStoredNews={setStoredNews}
        setReloadNews={setReloadNews}
      />
      {storednews.length > 0 ? (
        storednews.map((report) => (
          <Card className="mb-5 mt-3" key={report._id}>
            <Card.Header as="h5">{report.title}</Card.Header>
            <Card.Body>
              <Card.Title>{report.description}</Card.Title>
              <Card.Text>{report.content}</Card.Text>
              <Button
                variant="primary"
                onClick={() => handleArchiveButton(report)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h2>No News yet</h2>
      )}
    </Container>
  );
};

export default News;
