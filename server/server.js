const express = require('express');
const app = express();

app.get("/", (req, res) => {
    console.log("start")
    res.send("Hello, Server was started")
});

app.listen(3000, function () {
 console.info(`Server is running at port 3000`);
});
