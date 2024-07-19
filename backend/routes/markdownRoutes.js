const express = require("express");
const router = express.Router();
const markdownController = require("../controllers/markdownController");

router.get("/api/markdown", markdownController.getMarkdown);
router.post("/api/markdown", markdownController.updateMarkdown);

module.exports = router;
