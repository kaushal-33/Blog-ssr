require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");
const indexRouter = require("./routes/indexRoute.js");
const authRouter = require("./routes/authRoute.js");
const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.listen(PORT, () => {
    console.log("server started....!")
    console.log(`http://localhost:${PORT}`)
})

