const express = require("express");
const {
  postThread,
  postComment,
  putThread,

  delThread,
  delComment,
  getThread,
  getComment,
} = require("../controllers/viewController");
const router = express.Router();

router.post("/add/thread/:uid", postThread);
router.post("/add/comment/:uid/:tid", postComment);
router.put("/update/thread/:uid/:tid", putThread);

router.delete("/delete/thread/:tid", delThread);
router.delete("/delete/comment/:tid", delComment);
router.get("/view/thread/:tid", getThread);
router.get("/view/comments/:tid", getComment);

module.exports = router;
