const express = require("express");
const router = express.Router();
const newsCrud = require("../middleware/newsCrud");

// /news
router.get("/", newsCrud.getNews);
router.post("/", newsCrud.postNews);
router.delete("/:id", newsCrud.deleteNews);

module.exports = router;
