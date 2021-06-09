import { Router } from "express";
import * as productoCtrL from "./producto.controller";

import upload from "../../middlewares/multer";

const router = Router();

router.post("/", upload.single("photo"), productoCtrL.createProducto);
router.get("/", productoCtrL.getProductos);

export default router;
