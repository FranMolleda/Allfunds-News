import { useState } from "react";
import { Button, Offcanvas, Form, Alert } from "react-bootstrap";
import {
  PostStoredNews,
  GetStoredNews,
} from "../../../controllers/newsController";

function NewsForm({
  news,
  reloadnews,
  storednews,
  setNews,
  setReloadNews,
  setStoredNews,
}) {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState(false);
  const [msgexists, setMsgExists] = useState(false);

  const { title, description, content, author } = news;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewsInput = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

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
      return;
    }

    if (checkTitle.includes(title)) {
      setMsgExists(true);
      handleShow();
      return;
    }

    setStoredNews([...storednews, news]);

    setReloadNews(reloadnews + 1);
    GetStoredNews(setStoredNews);

    PostStoredNews(news);

    setNews({
      title: "",
      description: "",
      content: "",
      author: "",
    });

    setMsgExists(false);
    setMsg(false);
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
            All fields must be filled
          </Alert>
        ) : null}
        {msgexists ? (
          <Alert className="text-center" variant="danger">
            News title already exists
          </Alert>
        ) : null}
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Post News</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleNewsForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
