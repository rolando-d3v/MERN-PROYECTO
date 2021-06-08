import { Router } from "express";
import * as productoCtrL from "./producto.controller";

const router = Router();

router.post("/", productoCtrL.createProducto);
router.get("/", productoCtrL.getProductos);

export default router;
