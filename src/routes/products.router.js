import { Router } from "express";

const router = Router();
const products = [];

router.get("/", (req, res) => {
    res.status(200).send({state: "success", data: products});
});

// server.get("/api/products/:id", ( req, res) => {
//     const { id } = req.params;
//     const product = products.find((item) => item.id === Number(id));

//         if(!product){
//             return res.status(400).send({"Error": "no se encontró ningún usuario"});
//     }
//    res.status(200).send({data: product});
//     }
// );

router.post("/", (req, res) => {
    const {id, title, description, code, price, status, stock, category, thumbnails} = req.body;
    const product = {id, title, description, code, price, status, stock, category, thumbnails}
    users.push(user);

    res.status(201).send({state: "success", data: product });
});

export default router;
