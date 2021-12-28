import { useState, useEffect, useContext } from "react";
import { NewsContext } from "../../../context/newsContext";
import { Card, Button, Container, Alert } from "react-bootstrap";
import Loading from "../../UI/Snipper";
import moment from "moment";
import {
  GetStoredArchives,
  DeleteStoredArchives,
} from "../../../controllers/archivesController";

const Archives = () => {
  const { archivednewstored, setArchivedNewsStored } = useContext(NewsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArchives = async () => {
      try {
        await GetStoredArchives(setArchivedNewsStored);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };
    getArchives();
  }, [setArchivedNewsStored]);

  const handleArchiveButton = async (report) => {
    try {
      await DeleteStoredArchives(report._id);
      const archivedfilter = archivednewstored.filter(
        (archive) => archive._id !== report._id
      );
      setArchivedNewsStored(archivedfilter);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {loading ? (
        <>
          <h1 className="shadow p-3 mt-5 text-center text-secondary">
            Archived News
          </h1>
          <Loading />
        </>
      ) : (
        <>
          <h1 className="shadow p-3 mt-5 mb-5 text-center text-secondary">
            Archived News
          </h1>
          {archivednewstored.length > 0 ? (
            archivednewstored.map((report, i) => (
              <Card className="shadow p-3 mb-5 mt-3" key={i}>
                <Card.Header as="h5">{report.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{report.description}</Card.Title>
                  <Card.Text>{report.content}</Card.Text>
                  <footer className="blockquote-footer mt-4">
                    Written by:{" "}
                    <cite title="Source Title">{report.author}</cite>
                  </footer>
                  <Button
                    variant="secondary"
                    onClick={() => handleArchiveButton(report)}
                  >
                    Remove
                  </Button>
                  <Card.Text className="text-secondary  mt-2 text-end">
                    Published at:{" "}
                    {moment(report.archiveDate).format("DD-MM-YYYY")}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Alert variant="secondary" className="text-center mb-5">
              No News Archived yet
            </Alert>
          )}
        </>
      )}
    </Container>
  );
};

export default Archives;
