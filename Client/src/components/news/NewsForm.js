import { useState } from "react";
import { Button, Offcanvas, Form, Alert } from "react-bootstrap";
import { PostStoredNews } from "../../controllers/newsController";

function NewsForm({ news, setNews, reloadnews, setReloadNews }) {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState(false);
  const { title, description, content, author } = news;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewsInput = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleNewsForm = async (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      description === "" ||
      content === "" ||
      author === ""
    ) {
      handleShow();
      setMsg(true);
      return;
    }

    setReloadNews(reloadnews + 1);

    PostStoredNews(news);
    setNews({
      title: "",
      description: "",
      content: "",
      author: "",
    });

    setMsg(false);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add News
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        {msg ? <Alert variant="danger">All fields must be filled</Alert> : null}
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New News</Offcanvas.Title>
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
            <Button variant="success" type="submit" onClick={handleShow}>
              Save
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NewsForm;
