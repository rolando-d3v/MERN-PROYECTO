const jwt = require("jsonwebtoken");


//==============================
//VERIFICA SI TIENE TOKEN DE ACCESO 
//==============================
exports.verificaToken = (req, res, next) => {
  try {

    let token = req.header("Authorization");
    if (!token) {
      res.json({ ok: false, message: "Acceso denegado: por falta de token" });
    }

    //mostrar error de token incorrecto
    verifiToken = jwt.verify(token, process.env.SECRET, (err, userToken) => {
      if (err) {
        res.json({
          ok: false,
          message: "Acceso denegado: su token no es valido",
        });
        throw err;
      } else {
        //crear un req con el nombre se user  
        req.user = userToken;
        next();
      }
    });

  } catch (error) {
    res.json({ message: "error de token ", error });
    next();
  }
};



//==============================
//VERIFICA SI EL TOKEN ES ADMIN
//==============================
exports.verificaToken_ADMIN_ROLE = (req, res, next) => {
    try {
      let usuario = req.user
      if(usuario.role !== 'ADMIN_ROLE') {
        res.json({ok: false, message: 'el user no es Administrador'})
      } else {
          next()
      }

    } catch (error) {
        res.json({ok: false, error})
        next()
    }
}
