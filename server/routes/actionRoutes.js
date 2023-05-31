const express = require("express");
const {
  postLikeThread,
  postDislikeThread,
  postLikeComment,
  postDislikeComment,
} = require("../controllers/actionController");
const router = express.Router();

router.post("/like/thread/:uid/:tid", postLikeThread);
router.post("/dislike/thread/:uid/:tid", postDislikeThread);
router.post("/like/comment/:uid/:tid", postLikeComment);
router.post("/dislike/comment/:uid/:tid", postDislikeComment);

module.exports = router;
