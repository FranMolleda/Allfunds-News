const express = require("express");
const router = express.Router();
const News = require("../models/News");

//news
router.get("/", async (req, res) => {
  try {
    const allNews = await News.find().sort({ date: -1 });
    res.json(allNews);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newNews = await new News(req.body);
    await newNews.save();
    res.json(newNews);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let newsDelete = await News.findById(req.params.id);

    if (!newsDelete) {
      return res.status(404).json({ msg: "News not found" });
    }

    await News.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "News delete " });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
