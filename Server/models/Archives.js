const mongoose = require("mongoose");

const ArchivesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  archiveDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Archives", ArchivesSchema);
