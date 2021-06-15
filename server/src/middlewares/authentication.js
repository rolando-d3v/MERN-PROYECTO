import jwt from "jsonwebtoken";
import config from "../config/config";

//==============================
//authenticate a user with a token
//==============================
export const authToken = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) return res.status(404).json({ msn: "token not found  ❗️❗️" });

    const verifyToken = jwt.verify(token, config.secret);
    //create a request with name the user
    req.user = verifyToken;

    next();
  } catch (err) {
    return res.json({ msn: "authetication incorrect", err });
  }
};



//==============================
//authenticate a user with a token
//==============================
export const tokenAdmin = (req, res) => {
    try {
        
    } catch (err) {
        return res.json({ msn: "authetication incorrect", err });
    }
}


 
