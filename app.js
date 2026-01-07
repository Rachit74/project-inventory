const path = require("node:path");
const express = require("express");

const indexRouter = require("./routes/indexRouter");
const categoryRouter = require("./routes/categoryRouter");
const projectRouter = require("./routes/projectRouter");


app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/categories", categoryRouter);
app.use("/projects", projectRouter);


const PORT = 8000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log("App running at localhost:8000");
})