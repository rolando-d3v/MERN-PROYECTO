import Producto from "./producto.model";

//==============================
//CREATE ONE PRODUCTO
//==============================
export const createProducto = async (req, res) => {
  try {

    const producto = new Producto()
    producto.name = req.body.name;
    producto.preciounidad = req.body.preciounidad;
    producto.description = req.body.description;
    producto.filename = req.file.filename;
    producto.size = req.file.size;
    producto.originalname = req.file.originalname;
    producto.path = req.body.path;

    console.log(req.file);

    return res.json(producto);
    // return res.json({ msn: "Producto create success" });
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};

//==============================
//OBTIENE ALL PRODUCTOS
//==============================
export const getProductos = async (req, res) => {
  try {
    return res.json({ msn: "hola peru" });
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};
