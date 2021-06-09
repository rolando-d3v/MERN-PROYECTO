const productoModel = require("../models/productoModel");
const { unlink } = require("fs-extra");
const path = require("path");

//ENDPOINT  OBTENER ALL PRODUCTOS
exports.getProductos = async (req, res) => {
  try {
    //pagination
    let limit = parseInt(req.query.limit) || 12;
    let page = parseInt(req.query.page);
    const producto = await productoModel.paginate(
      {},
      { limit, page, sort: { createdAt: -1 } }
    );
    res.json(producto);
  } catch (error) {
    res.send(error);
  }
};

//ENDPOINT  OBTENER UN PRODUCTO
exports.getProducto = async (req, res) => {
  try {
    const producto = await productoModel.findById({
      _id: req.params.idProducto,
    });
    res.json({ ok: true, producto });
  } catch (error) {
    res.send(error);
  }
};

// //ENDPOINT PARA CREAR PRODUCTOS   PRIMERA FORMA
// exports.createProducto = async (req, res) => {
//   try {
//     const producto = new productoModel();
//     producto.name = req.body.name;
//     producto.precioUnitario = req.body.precioUnitario;
//     producto.description = req.body.description;
//     producto.filename = req.file.filename;
//     producto.size = req.file.size;
//     producto.path = "/upload/" + req.file.filename;
//     producto.originalName = req.file.originalname;
//     await producto.save();
//     res.json({ ok: true, message: "producto create successfully" });
//     console.log(producto);
//   } catch (error) {
//     res.send(error);
//   }
// };

//ENDPOINT PARA CREAR PRODUCTOS
exports.createProducto = async (req, res) => {
  try {
    const producto = new productoModel({
      name: req.body.name,
      precioUnitario: req.body.precioUnitario,
      description: req.body.description,
      filename: req.file.filename,
      size: req.file.size,
      path: "/upload/" + req.file.filename,
      originalName: req.file.originalname,
    });

    await producto.save();
    res.json({ ok: true, message: "producto create successfully" });
    console.log(producto);
  } catch (error) {
    res.send(error);
  }
};

//ENDPOINT PARA REMOVER UN PRODUCTO
exports.deleteProducto = async (req, res) => {
  try {
    const producto = await productoModel.findOneAndDelete({
      _id: req.params.idProducto,
    });
    await unlink(path.resolve(`./src/public${producto.path}`));
    res.json({ ok: true, message: "producto eliminado " + producto.filename });
  } catch (error) {
    res.send(error);
  }
};

//ENDPOINT DE BUSQUEDA
exports.buscarProducto = async (req, res) => {
  try {
    let name = req.params.name;
    let regTermino = new RegExp(name, "i");
    const buscarPro = await productoModel.find({ name: regTermino });
    res.json(buscarPro);
  } catch (error) {
    res.send(error);
  }
};
