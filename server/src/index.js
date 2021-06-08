import express from "express";
import morgan from "morgan";
import cors from "cors";
import productoRoutes from "./api/producto/producto.routes";

//config app
import "./config/config";

//db
import "./config/db";

//server app
const app = express();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`🔥  🚀  Server port ➡️  ${port} 😃  ✔️ ••• ✨ `);
});

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

//routes
app.use("/productos", productoRoutes);
