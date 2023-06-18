const express = require("express");
const {newShortUrl, handleGetAnalytics} = require("../controllers/url")

const router = express.Router();

router.post("/",newShortUrl)
router.get("/analytics/:shortId", handleGetAnalytics)
module.exports = router;