import React, { useEffect, useContext } from "react";
import { NewsContext } from "../../context/newsContext";
import {
  GetStoredArchives,
  DeleteStoredArchives,
} from "../../controllers/archivesController";
import { Card, Button, Container } from "react-bootstrap";

const Archives = () => {
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
  useEffect(() => {
    const getNews = () => {
      GetStoredArchives(setArchivedNewStored);
    };
    getNews();
  }, [setArchivedNewStored]);

  const handleArchiveButton = async (report) => {
    DeleteStoredArchives(report._id);
  };

  console.log(archivednewstored);
  return (
    <Container>
      <h1>Desde Archives</h1>
      {archivednewstored.length > 0 ? (
        archivednewstored.map((report) => (
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

export default Archives;
