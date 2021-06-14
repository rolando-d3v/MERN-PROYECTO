const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

//_* ENDPOINT PARA CREATED USERS
exports.createUser = async (req, res) => {
  try {
   
    const user = new userModel({
      email: req.body.email,
      name: req.body.name,
      role: req.body.role,
      estado: req.body.estado,
      password: await bcrypt.hash(req.body.password, 10),
    });
    
    //validar si el email es valido
    let existeEmail = await userModel.findOne({ email: req.body.email })

    if (existeEmail) {
      res.json({ ok: false, message: "el email ya existe" });
    } else {
      await user.save();
      console.log(user);
      res.json({ ok: true, message: "User created successfully" });
    }
  } catch (error) {
    // if (error.code === 11000) {
    //   res.json({ message: "el email ya existe" });
    // }
    res.send(error);
  }
};


//_* ENDPOINT PARA OBTENER ALL USERS
exports.getUsers = async (req, res) => {
  try {
    let limit = parseInt(req.query.limit) || 2;
    const user = await userModel.paginate({}, { limit });
    res.json(user);
  } catch (error) {
    res.send(error);
  }
};


//_* ENDPOINT PARA OBTENER A USER
exports.getUser = async (req, res) => {
  try {
    const user = await userModel.findById(
      { _id: req.params.idUser },
      { password: 0 }
    );
    if (!user) {
      res.json({
        ok: false,
        message: "user no encontrado",
      });
    }
    res.json(user);
  } catch (error) {
    res.send(error);
  }
};


//_* DELETE A USER
exports.deleteUser = async (req, res) => {
  try {
    const user = await userModel.findOneAndDelete({ _id: req.params.idUser });
    if (!user) {
      res.json({
        ok: false,
        message: "user no encontrado",
      });
    }
    res.json({
      ok: true,
      message: `User: ${user.name} => deleted successfully`,
    });
  } catch (error) {
    res.send(error);
  }
};
