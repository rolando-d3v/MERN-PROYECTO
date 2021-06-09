import Producto from "./producto.model";

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
    return res.json({ msn: "Producto create success" });
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
