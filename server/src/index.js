import express from "express";
import morgan from "morgan";
import path from 'path';
import cors from "cors";
import productoRoutes from "./api/producto/producto.routes";
import userRoutes from "./api/user/user.routes";
import loginRoutes from './api/login/login.routes';

//creacion de roles al iniciar la app
import { createdSetupRoles } from './api/role/iniciarSetupRoles';

//config app
import "./config/config";

//db
import "./config/db";

//server app
const app = express();
createdSetupRoles()
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`🔥  🚀  Server port ➡️  ${port} 😃  ✔️ ••• ✨ `);
});

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use("/productos", productoRoutes);
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
