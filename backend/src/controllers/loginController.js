const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');


exports.loginUser = async (req, res, next) => {
  try {
    const userEmail = await userModel.findOne({ email: req.body.email });
    if (!userEmail) {
      res.json({ ok: false, message: "el email no existe" });
    }
    const pass = await bcrypt.compare(req.body.password, userEmail.password);
    if (!pass) {
      res.json({ ok: false, message: "el password es incorrecto" });
    }

    const token = jwt.sign(
      {
        id: userEmail._id,
        name: userEmail.name,
        email: userEmail.email,
        role: userEmail.role,
        estado: userEmail.estado,
      },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 12 }
    );

    res.json({
      ok: true,
      message: "login correcto",
      usuario: userEmail,
      token,
    });

  } catch (error) {
    res.send(error);
    next()
  }
};

