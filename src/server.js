import express from "express";
import paths from "./utils/path.js";
import products from "./products.js";
import homeRouter from "./routes/home.router.js";
import serverSocketIO from "./config/socket.config.js";
import configHandlebars from "./config/handlebars.config.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

//Configuración de handlebars
configHandlebars.config(server);

server.use("/api/public", express.static(paths.public));

server.use("/home", homeRouter);

//Endpoint de productos
server.get("/api/products", (req, res) => {
    const randomID = Math.floor(Math.random() * products.length);
    const product = products[randomID];

    res.render("products", { title: "productos", product });
});

const serverHTTP = server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});

//Configuración del servidor de websocket
serverSocketIO.config(serverHTTP);