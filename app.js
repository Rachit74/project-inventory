const path = require("node:path");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");



const indexRouter = require("./routes/indexRouter");
const categoryRouter = require("./routes/categoryRouter");
const projectRouter = require("./routes/projectRouter");

const assetsPath = path.join(__dirname, "public");


app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/categories", categoryRouter);
app.use("/projects", projectRouter);

app.use(express.static(assetsPath));

app.use(expressLayouts);
app.set("layout", "layout"); // default layout.ejs



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const PORT = 8000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log("App running at localhost:8000");
})