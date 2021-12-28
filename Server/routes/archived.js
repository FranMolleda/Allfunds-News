const express = require("express");
const router = express.Router();
const archivedCrud = require("../middleware/archivedCrud");

// /archived
router.get("/", archivedCrud.getArchived);
router.post("/", archivedCrud.postArchived);
router.delete("/:id", archivedCrud.deleteArchived);

module.exports = router;
