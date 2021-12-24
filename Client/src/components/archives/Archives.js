import React, { useState, useEffect, useContext } from "react";
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
    setArchivedStored,
  } = useContext(NewsContext);

  useEffect(() => {
    getArchives();
  }, [archivednewstored]);

  const getArchives = async () => {
    await GetStoredArchives(setArchivedStored);
  };
  const handleArchiveButton = (report) => {
    DeleteStoredArchives(report._id);
  };

  return (
    <Container>
      <h1 className="mt-5 text-center text-secondary">Archives</h1>
      {archivednewstored.length > 0 ? (
        archivednewstored.map((report) => (
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
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h2 className="mt-5 text-center text-secondary">
          No News Archived yet
        </h2>
      )}
    </Container>
  );
};

export default Archives;
