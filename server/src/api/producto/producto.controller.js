import Producto from "./producto.model";
import { unlink } from "fs-extra";
import path from "path";


//==============================
//CREATE ONE PRODUCTO
//==============================
export const createProducto = async (req, res) => {
  try {
    const producto = new Producto();
    producto.name = req.body.name;
    producto.preciounidad = req.body.preciounidad;
    producto.description = req.body.description;
    producto.filename = req.file.filename;
    producto.size = req.file.size;
    producto.originalname = req.file.originalname;
    producto.path = "/upload/" + req.file.filename;

    console.log(producto);
    await producto.save();
    return res.json({ msn: "Producto create success ✔️" });
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};

//==============================
//OBTIENE ALL PRODUCTOS
//==============================
export const getProductos = async (req, res) => {
  try {
    let limit = parseInt(req.query.limit) || 12;
    let page = parseInt(req.query.page);

    const producto = await Producto.paginate(
      {},
      { limit, page, sort: { createdAt: -1 } }
    );
    return res.json(producto);
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};

//==============================
//OBTIENE ONE PRODUCTOID
//==============================
export const getProductoId = async (req, res) => {
  try {
    const producto = await Producto.findById({ _id: req.params.proId });
    if (!producto) {
      return res.json({ msn: "ID not found" });
    }
    return res.json(producto);
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};

//==============================
//DELETE ONE PRODUCTO
//==============================
export const deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findOneAndDelete({
      _id: req.params.proId,
    });

    if (!producto) {
      return res.status(405).json({ msn: "ID not found" });
    }
    //elimina el archivo de upload
    await unlink(path.resolve(__dirname, "../../public" + producto.path));
    res.json({ ok: true, msn: "producto eliminado " + producto.filename });
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};

//==============================
//ENDPOINT DE  BUSCAR  PRODUCTOID
//==============================
export const buscarProducto = async (req, res) => {
  try {
    //buscar con RegExp
    const nameParams = req.params.name;
    let terminoBuscar = new RegExp(nameParams, "i");
    const producto = await Producto.find({ name: terminoBuscar });

    res.json(producto);
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};
