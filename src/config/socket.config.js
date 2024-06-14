import { Server } from "socket.io";

const config = (serverHTTP) => {
    const serverIO = new Server(serverHTTP) ;

    serverIO.on("connection", (socket) => {
        const id = socket.client.id;
        console.log("conexión establecida", id);

        socket.on("saludo", (data) => {
            console.log(data.message);

            serverIO.emit("saludo-respuesta", { message: "Hola cliente" });
        });
        socket.on("disconnect", () => {
            console.log("Se ha desconectado un cliente");
        });
    });
};

export default { config };