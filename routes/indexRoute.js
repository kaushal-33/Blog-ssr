const express = require("express");
const { home, blogForm, addBlog } = require("../controllers/indexController.js");
const { isLogin } = require("../middleware/protectedRoute.js");
const upload = require("../middleware/multer.js");
const router = express.Router();

router.get("/", isLogin, home);
router.get("/add-blog", blogForm);
router.post("/add-blog", upload.single("blogImage"), addBlog)
module.exports = router;