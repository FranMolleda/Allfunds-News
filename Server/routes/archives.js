const express = require("express");
const router = express.Router();
const Archives = require("../models/Archives");

//archives
router.get("/", async (req, res) => {
  try {
    const allArchives = await Archives.find().sort({ date: -1 });
    res.json(allArchives);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newArchives = await new Archives(req.body);
    await newArchives.save();
    res.json(newArchives);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let newsDelete = await Archives.findById(req.params.id);

    if (!newsDelete) {
      return res.status(404).json({ msg: "Archives not found" });
    }

    await News.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Archives delete " });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
