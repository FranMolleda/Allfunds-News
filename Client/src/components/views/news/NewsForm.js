import { useState } from "react";
import { Button, Offcanvas, Form, Alert } from "react-bootstrap";
import {
  PostStoredNews,
  GetStoredNews,
} from "../../../controllers/newsController";

function NewsForm({ news, storednews, setNews, setStoredNews }) {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState(false);
  const [msgexists, setMsgExists] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewsInput = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const { title, description, content, author } = news;

  const checkTitle = storednews.map((element) => {
    return element.title;
  });

  const handleNewsForm = async (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      content.trim() === "" ||
      author.trim() === ""
    ) {
      handleShow();
      setMsg(true);
      setMsgExists(false);
      return;
    }

    if (checkTitle.includes(title)) {
      setMsgExists(true);
      handleShow();
      await setMsg(false);
      return;
    }

    await PostStoredNews(news);

    GetStoredNews(setStoredNews);

    setNews({
      title: "",
      description: "",
      content: "",
      author: "",
    });

    handleClose();
  };

  return (
    <>
      <Button variant="secondary" className="mb-5" onClick={handleShow}>
        Add News
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        {msg ? (
          <Alert className="text-center" variant="danger">
            All fields are required
          </Alert>
        ) : null}
        {msgexists ? (
          <Alert className="text-center" variant="danger">
            Title already exists
          </Alert>
        ) : null}
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Post News</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleNewsForm}>
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                type="text"
                onChange={handleNewsInput}
                placeholder="Enter title"
                name="title"
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                type="text"
                onChange={handleNewsInput}
                placeholder="Enter description"
                name="description"
              />
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                type="text"
                onChange={handleNewsInput}
                placeholder="Enter content"
                name="content"
              />
              <Form.Label>Author</Form.Label>
              <Form.Control
                value={author}
                type="author"
                onChange={handleNewsInput}
                placeholder="Enter author"
                name="author"
              />
            </Form.Group>
            <Button variant="secondary" type="submit" onClick={handleShow}>
              Save
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NewsForm;
