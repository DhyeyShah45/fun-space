const express = require("express");
const router = express.Router();
const { getStat, getTop5 } = require("../controllers/mainController");
router.get("/stat", getStat);
router.get("/top5", getTop5);

module.exports = router;
