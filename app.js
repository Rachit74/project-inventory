const path = require("node:path");
const express = require("express");

const indexRouter = require("./routes/indexRouter");

app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);



const PORT = 8000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log("App running at localhost:8000");
})