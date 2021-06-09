import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const productoSchema = new Schema(
  {
    name: { type: String, require: true },
    filename: { type: String, required: true },
    size: { type: Number, required: true },
    preciounidad: { type: Number, required: true },
    path: String,
    originalname: String,
    description: String,
  },
  { timestamps: true, versionKey: false }
);

productoSchema.plugin(mongoosePaginate)

export default model("Producto", productoSchema);
