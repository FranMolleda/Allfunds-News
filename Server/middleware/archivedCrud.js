const Archived = require("../models/Archived");

exports.getArchived = async (req, res) => {
  try {
    const allArchives = await Archived.find().sort({ archiveDate: -1 });
    res.json(allArchives);
  } catch (error) {
    console.log(error);
  }
};

exports.postArchived = async (req, res) => {
  const title = req.body.title;

  try {
    const archiveExists = await Archived.findOne({ title });
    if (archiveExists) {
      return res.status(400).json({ msg: "Archive already exists" });
    }

    const newArchives = await new Archived(req.body);
    await newArchives.save();
    res.json(newArchives);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteArchived = async (req, res) => {
  try {
    let archiveDelete = await Archived.findById(req.params.id);

    if (!archiveDelete) {
      return res.status(404).json({ msg: "Archives not found" });
    }

    await Archived.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Archive delete " });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
