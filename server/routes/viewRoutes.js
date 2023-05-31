const express = require("express");
const {
  postThread,
  postComment,
  putThread,
  putComment,
  delThread,
  delComment,
} = require("../controllers/viewController");
const router = express.Router();

router.post("/add/thread/:uid", postThread);
router.post("/add/comment/:uid/:tid", postComment);
router.put("/update/thread/:uid/:tid", putThread);
router.put("/update/comment/:uid/:tid", putComment);
router.delete("/delete/thread/:tid", delThread);
router.delete("/delete/comment/:tid", delComment);

module.exports = router;
