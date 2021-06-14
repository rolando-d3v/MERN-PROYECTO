import { Schema, model } from "mongoose";

// ROLES VALIDOS
const rolesValidos = {
    values: ["ADMIN_ROLE", "USER_ROLE"],
    message: "{VALUE} no es un role valido",
  };

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    estado: { type: Boolean, default: true },
    role: { type: String, default: "USER_ROLE", enum: rolesValidos },
  },
  { timestamps: true, versionKey: false }
);



// function to not show password in JSON  BACK-END
userSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
  }

export default model("User", userSchema);
