import { useState, useEffect, useContext } from "react";
import { NewsContext } from "../../../context/newsContext";
import { Card, Button, Container, Alert } from "react-bootstrap";
import {
  GetStoredNews,
  DeleteStoredNews,
} from "../../../controllers/newsController";
import { PostStoredArchives } from "../../../controllers/archivesController";
import NewsForm from "./NewsForm";
import Loading from "../../UI/Snipper";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const News = () => {
  const {
    news,
    storednews,
    archivednewstored,
    setNews,
    setStoredNews,
    setArchivedNews,
    setArchivedNewsStored,
  } = useContext(NewsContext);

  const [loading, setLoading] = useState(true);
  const redirectArchives = useNavigate();

  useEffect(() => {
    const getNews = async () => {
      try {
        await GetStoredNews(setStoredNews);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getNews();
  }, [setStoredNews]);

  const handleArchiveButton = async (report) => {
    try {
      await setArchivedNews(report);
      await setArchivedNewsStored([report, ...archivednewstored]);
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
          <h1 className="shadow p-3 mt-5 text-center text-secondary">
            Allfunds News
          </h1>
          <Loading />
        </>
      ) : (
        <>
          <h1 className="shadow p-3 mt-5 mb-5 text-center text-secondary">
            Allfunds News
          </h1>
          {storednews.length > 0 ? (
            storednews.map((report, i) => (
              <Card className="shadow p-3 mb-5 mt-3" key={i}>
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
            <Alert variant="secondary" className="text-center mb-5">
              No News yet
            </Alert>
          )}
          <NewsForm
            news={news}
            storednews={storednews}
            setNews={setNews}
            setStoredNews={setStoredNews}
          />
        </>
      )}
    </Container>
  );
};

export default News;
