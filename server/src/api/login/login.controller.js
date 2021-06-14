import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../user/user.model";
import config from '../../config/config';

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        //authentication email user
        const userData = await User.findOne({ email: email });
        if (!userData) return res.status(404).json({ msn: "email not found" });

        //authentication password user
        const userPass = await bcrypt.compare(password, userData.password);
        if (!userPass) return res.status(400).json({ msn: "Password not correct" });

        const userToken = jwt.sign(
            { id: userData._id, emai: userData.email },
            config.secret,
            { expiresIn: '5h' }
        );

        return res.json({ ok: true, userToken });
    } catch (err) {
        return console.log({ msn: "Error server", err });
    }
};
