import jwt from "jsonwebtoken";
import Role from "../api/role/role.model";
import config from "../config/config";

//==============================
//authenticate a user with a token
//==============================
export const authToken = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) return res.status(404).json({ msn: "token not found  ❗️❗️" });

    //create a request with name the user
    const verifyToken = jwt.verify(token, config.secret);
    req.user = verifyToken;

    next();
  } catch (err) {
    return res.json({ msn: "authetication incorrect", err });
  }
};

//==============================
//authenticate with role admin
//==============================
export const adminRole = async (req, res, next) => {
  try {
    const roleAdmin = await Role.find({ _id: { $in: req.user.roles } });
    for (let i = 0; i < roleAdmin.length; i++) {
      if (roleAdmin[i].role === "admin") {
        next();
        return;
      }
    }
    return res.status(403).json({ msn: "Require Admin role ❗️❗️" });
  } catch (err) {
    return res.json({ msn: "authetication incorrect", err });
  }
};

//==============================
//authenticate with role senales
//==============================
export const senalesRole = async (req, res, next) => {
  try {
    const roleSenales = await Role.find({ _id: { $in: req.user.roles } });
    for (let i = 0; i < roleSenales.length; i++) {
      if (roleSenales[i].role === "senales") {
        next();
        return;
      }
    }
    return res.status(403).json({ msn: "Require Senales role ❗️❗️" });
  } catch (err) {
    return res.json({ msn: "authetication incorrect", err });
  }
};
