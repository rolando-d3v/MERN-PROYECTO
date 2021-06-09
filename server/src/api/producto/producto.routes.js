import { Router } from "express";
import * as productoCtrL from "./producto.controller";

//middlewares
import upload from "../../middlewares/multer";

const router = Router();

//routes
router.post("/", upload.single("photo"), productoCtrL.createProducto);
router.get("/", productoCtrL.getProductos);
router.get("/:proId", productoCtrL.getProductoId);
router.delete("/:proId", productoCtrL.deleteProducto);

//endpoint busqueda
router.get('/buscar/:name' ,productoCtrL.buscarProducto)

export default router;
