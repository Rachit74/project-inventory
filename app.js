const path = require("node:path");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const session = require("express-session");



const indexRouter = require("./routes/indexRouter");
const categoryRouter = require("./routes/categoryRouter");
const projectRouter = require("./routes/projectRouter");
const authRouter = require("./routes/authRouter");

const assetsPath = path.join(__dirname, "public");


app = express();
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "dora_the_explorer", // move to env later
    resave: false,
    saveUninitialized: false,
  })
);


app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});


app.use(expressLayouts);
app.set("layout", "layout"); // default layout.ejs

app.use("/", indexRouter);
app.use("/categories", categoryRouter);
app.use("/projects", projectRouter);
app.use("/auth", authRouter);

app.use(express.static(assetsPath));



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const PORT = 8000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log("App running at localhost:8000");
})