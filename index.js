const path = require("path");
const express = require('express')
const app = express()
const port = 3000

app.get('/api/foo', (req, res) => {
    res.send('Hello World!')
})

app.use("/", express.static(path.join(__dirname, "./", "res")))

app.use((err, req, res, next) => {
    console.log("Unhandled WebServer Error", err);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
