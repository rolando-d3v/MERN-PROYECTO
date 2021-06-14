import User from "./user.model";
import bcrypt from "bcrypt";

//==============================
//CREATED ONE USER
//==============================
export const createUser = async (req, res) => {
  try {
    const user = new User();
    user.email = req.body.email;
    user.username = req.body.username;
    user.password = await bcrypt.hash(req.body.password, 10);
    user.estado = req.body.estado;
    user.role = req.body.role;

    const emailExiste = await User.findOne({ email: req.body.email });
    if (emailExiste) {
      return res.json({ msn: "El email ya existe" });
    } else {
      await user.save();
      return res.json({ msn: "User created success" });
    }
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};

//==============================
//OBTIENE ALL USER
//==============================
export const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    return res.json(user);
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};

//==============================
//OBTIENE ALL USER
//==============================
export const getUserId = async (req, res) => {
  try {
    const user = await User.findOne(
      { _id: req.params.userId },
      { password: 0 }
    );

    if (!user) {
      return res.status(405).json({ msn: "user no found" });
    } else {
      return res.json(user);
    }
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};



//==============================
//DELETE A USER
//==============================

export const deleteUser = async (req, res) => {
try {
  const user = await User.findByIdAndDelete({_id: req.params.userId})
  
} catch (err) {
  return res.json({msn: 'Error server', err})
}
} 