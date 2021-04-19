const { Schema, model } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const productoSchema = new Schema(
  {
    name: { type: String, required: true },
    filename: { type: String, required: true },
    size: { type: Number, required: true },
    precioUnitario: { type: Number, required: true },
    path: String,
    originalName: String,
    description: String,
  },
  { timestamps: true}
);


productoSchema.plugin(mongoosePaginate)

module.exports = model("Producto", productoSchema);
