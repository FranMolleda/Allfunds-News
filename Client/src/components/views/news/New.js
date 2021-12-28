import { useState, useEffect, useContext } from "react";
import { NewsContext } from "../../../context/newsContext";
import { Card, Button, Container, Alert } from "react-bootstrap";
import Loading from "../../UI/Snipper";
import {
  GetStoredNews,
  DeleteStoredNews,
} from "../../../controllers/newsController";
import NewsForm from "./NewsForm";
import { useNavigate } from "react-router-dom";
import { PostStoredArchives } from "../../../controllers/archivesController";
import moment from "moment";

const News = () => {
  const {
    news,
    storednews,
    archivednewstored,
    setNews,
    setStoredNews,
    setArchivedNews,
    setArchivedStored,
    setNewsIdx,
  } = useContext(NewsContext);

  const [reloadnews, setReloadNews] = useState(0);
  const [loading, setLoading] = useState(true);
  const redirectArchives = useNavigate();

  useEffect(() => {
    // const getNews = () => {
    try {
      GetStoredNews(setStoredNews);
      setReloadNews(reloadnews);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    // };
    // getNews();
  }, []);

  const handleArchiveButton = async (report) => {
    try {
      await setArchivedNews(report);
      await setArchivedStored([report, ...archivednewstored]);
      await DeleteStoredNews(report._id);
      await PostStoredArchives(report);
    } catch (error) {
      console.log(error);
    }
    redirectArchives("/archived");
  };

  return (
    <Container>
      {loading ? (
        <>
          <h1 className="mt-5 text-center text-secondary">News</h1>
          <Loading />
        </>
      ) : (
        <>
          <h1 className="mt-5 text-center text-secondary">News</h1>
          {storednews.length > 0 ? (
            storednews.map((report, i) => (
              <Card className="mb-5 mt-3" key={i}>
                <Card.Header as="h5">{report.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{report.description}</Card.Title>
                  <Card.Text>{report.content}</Card.Text>
                  <footer className="blockquote-footer mt-2">
                    Written by:{" "}
                    <cite title="Source Title">{report.author}</cite>
                  </footer>

                  <Button
                    variant="secondary"
                    onClick={() => handleArchiveButton(report)}
                  >
                    Archive
                  </Button>
                  <Card.Text className="text-secondary  mt-2 text-end">
                    Published at: {moment(report.date).format("DD-MM-YYYY")}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Alert variant="secondary" className="text-center">
              No News yet
            </Alert>
          )}
          <NewsForm
            news={news}
            storednews={storednews}
            setNews={setNews}
            reloadnews={reloadnews}
            setStoredNews={setStoredNews}
            setReloadNews={setReloadNews}
            setNewsIdx={setNewsIdx}
          />
        </>
      )}
    </Container>
  );
};

export default News;
