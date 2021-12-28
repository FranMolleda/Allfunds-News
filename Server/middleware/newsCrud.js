const News = require("../models/News");

exports.getNews = async (req, res) => {
  try {
    const allNews = await News.find().sort({ date: -1 });
    res.json(allNews);
  } catch (error) {
    console.log(error);
  }
};

exports.postNews = async (req, res) => {
  const title = req.body.title;

  try {
    const newsExists = await News.findOne({ title });
    if (newsExists) {
      return res.status(400).json({ msg: "News already exists" });
    }
    const newNews = await new News(req.body);
    await newNews.save();
    res.json(newNews);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteNews = async (req, res) => {
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
};
