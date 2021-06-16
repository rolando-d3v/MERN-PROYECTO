import User from "./user.model";
import Role from "../role/role.model";
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

    const emailExiste = await User.findOne({ email: req.body.email });
    if (emailExiste) return res.status(405).json({ msn: "El email ya existe" });

    //create a role whit name user default, si el campo roles not exist
    if (!req.body.roles) {
      const roleDefault = await Role.findOne({ role: "user" });
      user.roles = [roleDefault._id];

      //search the role es valid in database, si el campo roles exist
    } else {
      const roleMinuscula = req.body.roles.toLowerCase();
      const roleUser = await Role.findOne({ role: roleMinuscula });
      !roleUser && res.status(405).json({ msn: `${roleMinuscula} not found ` });

      //mapea los roles por name y despues para ponerlos en user.roles por user._id
      const roleName = await Role.find({ role: roleMinuscula });
      user.roles = roleName.map((rol) => rol._id);
    }

    console.log(user);
    await user.save();
    return res.json({ msn: "User created success" });
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};


//==============================
//GET ALL USERS
//==============================
export const getUsers = async (req, res) => {
  try {
    const user = await User.find({}).populate('roles');
    return res.json(user);
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};

//==============================
//GET A USER
//==============================
export const getUserId = async (req, res) => {
  try {
    const user = await User.findOne(
      { _id: req.params.userId },
      { password: 0 }
    ).populate('roles');

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
    const user = await User.findByIdAndDelete({ _id: req.params.userId });
    if (!user) {
      res.status(404).json({
        msn: "user not found",
      });
    }
    res.json({
      msn: `User: ${user.username} => deleted successfully`,
    });
  } catch (err) {
    return res.json({ msn: "Error server", err });
  }
};
