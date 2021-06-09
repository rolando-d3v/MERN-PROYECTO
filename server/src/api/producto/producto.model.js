import { Schema, model } from "mongoose";

const productoSchema = new Schema(
  {
    name: { type: String, require: true },
    filename: { type: String, required: true },
    size: { type: Number, required: true },
    preciounitario: { type: Number, required: true },
    path: String,
    originalname: String,
    description: String,
  },
  { timestamps: true }
);


// productoSchema.plugin(mongoosePaginate)

export default model("Producto", productoSchema);
