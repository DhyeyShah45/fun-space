const express = require("express");
const router = express.Router();
const {
  delUser,
  getUserComments,
  getUserDetails,
  getUserThreads,
  userLogin,
} = require("../controllers/userController");

router.delete("/del/:id", delUser);
router.get("/threads/:id", getUserThreads);
router.get("/comments/:id", getUserComments);
router.get("/details/:id", getUserDetails);
router.post("/login", userLogin);

module.exports = router;
