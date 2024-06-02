import express from "express";
import usuarios from "./usuarios.js";

const server = express();
const PORT = 8080;
const HOST = "localhost";

server.get("/", ( req, res) => {
    const {genero} = req.query;
    if(genero) {
        const usuario = usuarios.find((item) => item.genero === genero?.trim().toUpperCase());
       
        if(!usuario){
            return res.send({"Error": "no se encontró ningún usuario"})
    }
    res.send(JSON.stringify(usuarios));
    }
});

// server.get("/:userId", ( req, res) => {
//     const {userId} = req.params;
//     const usuario = usuarios.find((item) => item.id === Number(userId));

//     console.log(usuario);
//     res.send(usuario);
// });

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});
