const express = require("express");
const { getLogin, getSignUp } = require("../controllers/authController.js");
const router = express.Router();

router.get("/", getLogin);
router.get("/sign-up", getSignUp);

module.exports = router;