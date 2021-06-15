import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    estado: { type: Boolean, default: true },
    role: [{ ref: "Role", type: Schema.Types.ObjectId }],
  },
  { timestamps: true, versionKey: false }
);

// function to not show password in JSON  BACK-END
userSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

export default model("User", userSchema);
