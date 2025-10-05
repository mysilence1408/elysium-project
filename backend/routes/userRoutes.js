const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  userProfile,
} = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send("this is userRoutes");
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/profile", userProfile);

module.exports = router;
