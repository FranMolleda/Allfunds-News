import { useState, useEffect, useContext } from "react";
import { NewsContext } from "../../../context/newsContext";
import { Card, Button, Container, Alert } from "react-bootstrap";
import Loading from "../../UI/Snipper";
import moment from "moment";
import {
  GetStoredArchives,
  DeleteStoredArchives,
} from "../../../controllers/archivesController";
import { ClientAxiosBack } from "../../../config/configAxios";

const Archives = () => {
  const { archivednewstored, setArchivedStored } = useContext(NewsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArchives = async () => {
      try {
        const response = await ClientAxiosBack.get("/archived");
        setArchivedStored(response.data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };
    getArchives();
  }, [setArchivedStored]);

  const handleArchiveButton = async (report) => {
    try {
      await DeleteStoredArchives(report._id);
      const archivedfilter = await archivednewstored.filter(
        (archive) => archive._id !== report._id
      );
      setArchivedStored(archivedfilter);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {loading ? (
        <>
          <h1 className="mt-5 text-center text-secondary">Archived</h1>
          <Loading />
        </>
      ) : (
        <>
          <h1 className="mt-5 text-center text-secondary">Archived</h1>
          {archivednewstored.length > 0 ? (
            archivednewstored.map((report, i) => (
              <Card className="mb-5 mt-3" key={i}>
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
            <Alert variant="secondary" className="text-center">
              No News Archived yet
            </Alert>
          )}
        </>
      )}
    </Container>
  );
};

export default Archives;
