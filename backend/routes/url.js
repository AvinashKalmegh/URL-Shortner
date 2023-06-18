const express = require("express");
const {newShortUrl, getNewShortUrl} = require("../controllers/url")

const router = express.Router();

router.post("/",newShortUrl)
// router.get("/",getNewShortUrl)

module.exports = router;