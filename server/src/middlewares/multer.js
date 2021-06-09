import multer from "multer";
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
// const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/upload"),
  filename: (req, file, cb) => {
    let extension = path.extname(file.originalname).toLocaleLowerCase();
    cb(null, "photo-" + uuidv4() + extension);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000 * 4000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg"
    ) {
      return cb(null, true);
    } else {
      cb("Error: solo archivos jpg y png son validos");
    }
  },
});

export default upload;
