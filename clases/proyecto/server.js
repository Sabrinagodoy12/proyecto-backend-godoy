// HTTP server

//const http = require("http");

// const PORT = 8080;
// const HOST = "127.0.0.1";
// const server = http.createServer((request, response) => {
//     response.setHeader("Content-Type", "text/plain; charset=utf8");
//     response.end("¡Mi primer hola mundo desde el backend!");
// });

// server.listen(PORT, () => {
//     console.log(`Ejecutandose en http://${HOST}:${PORT}`);
// });

import express from "express";

const PORT = 8080;
const HOST = "127.0.0.1";
const server = express();
//Endpoint
server.get("/saludo", ( req, res) => {
    res.send("¡Hola a todos, pero ahora desde express!");
});

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});
