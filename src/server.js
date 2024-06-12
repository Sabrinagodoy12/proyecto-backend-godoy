import express from "express";
import path from "./utils/path.js";
import cartsRouter from "./routes/carts.router.js";
import productsRouter from "./routes/products.router.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

// server.use(express.json());
// server.use(express.urlencoded({extended: true}));

server.use("/api/public", express.static(path.public));

server.use("/api/carts", cartsRouter);
server.use("/api/products", productsRouter);

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});


