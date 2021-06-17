import { Router } from "express";
import * as productoCtrL from "./producto.controller";

//middlewares
import upload from "../../middlewares/multer";
import {authToken, adminToken} from '../../middlewares/authentication';



//routes products
const router = Router();
router.post("/", upload.single("photo"), productoCtrL.createProducto);
router.get("/",authToken, adminToken,  productoCtrL.getProductos);
router.get("/:proId", productoCtrL.getProductoId);
router.delete("/:proId", productoCtrL.deleteProducto);

//endpoint search
router.get('/buscar/:name' ,productoCtrL.buscarProducto)

export default router;
