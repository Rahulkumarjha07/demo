const express = require("express");

const app = express();

const port = 1000;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.json({
        msg: "hi i am a root user"
    });
});

app.get("/add/:a/:b", (req, res) => {

    const { a, b } = req.params;

    res.json({
        sum: parseInt(a) + parseInt(b)
    });

});