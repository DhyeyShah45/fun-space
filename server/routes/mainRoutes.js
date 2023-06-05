const express = require("express");
const router = express.Router();
const {
  getStat,
  getTop5,
  getAllThreads,
  getSearch,
} = require("../controllers/mainController");
router.get("/stat", getStat);
router.get("/top5", getTop5);
router.get("/all", getAllThreads);
router.post("/search", getSearch);

module.exports = router;
