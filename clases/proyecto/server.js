import express from "express";
import usuarios from "./usuarios.js";

const server = express();
const PORT = 8080;
const HOST = "localhost";

server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.get("/api/usuarios", ( req, res) => {
    const {genero} = req.query;
    if(genero) {
        const usuario = usuarios.filter((item) => item.genero === genero.trim().toUpperCase());

        if(!usuario){
            return res.status(400).send({"Error": "no se encontró ningún usuario"})
    }
    return res.status(200).send(JSON.stringify(usuarios));
    }
    res.send(JSON.stringify(usuarios));
});

server.get("/api/usuarios/:id", ( req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find((item) => item.id === Number(id));

        if(!usuario){
            return res.status(400).send({"Error": "no se encontró ningún usuario"});
    }
   res.status(200).send({data: usuario});
    }
);

server.get("/api/usuarios", ( req, res) => {
    const { id, nombre, apellido, edad, correo, genero } = req.body;

        if(!nombre || !apellido || !edad || !correo || !genero){
            return res.status(400).send({"Error": "Faltan datos"});
    }
    const usuarioNuevo = { id, nombre, apellido, edad, correo, genero};
    usuario.push(usuarioNuevo);

   res.status(200).send({data: usuarioNuevo});
    }
);

// server.update("/", ()=>{

// });

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});
