const express = require("express");
const { home } = require("../controllers/indexController.js");
const router = express.Router();

router.get("/", home);

module.exports = router;