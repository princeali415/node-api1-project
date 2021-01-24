const express = require("express");

const server = express();

server.get('/', (req, res) => {
    res.send(`<h1>Check</h1>`)
})

const PORT = 8000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`))