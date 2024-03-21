const express = require("express");
const router = express.Router();
const {getALlAuthors,createAuthor,getAuthorById,deleteAuthor,updateAuthor}= require("../controllers/authorfn")

router.get("/", getALlAuthors);
router.post("/", createAuthor);
router.get("/:id", getAuthorById)
router.delete("/:id", deleteAuthor);
router.patch("/:id", updateAuthor);

module.exports = router