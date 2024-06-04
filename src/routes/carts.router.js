import { Router } from "express";

const router = Router();
const carts = [];

router.get("/", (req, res) => {
    res.send({carts});
});

router.post("/", (req, res) => {
    const {id, products, } = req.body;
    const cart = {id, products}
    carts.push(cart);

    res.status(201).send({state: "success", data: cart });
});

export default router;
