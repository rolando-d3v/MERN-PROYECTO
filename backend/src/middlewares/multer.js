const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

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
    if (file.mimetype === "image/jpg" || file.mimetype === "image/png") {
      return cb(null, true);
    } else {
      cb("Error: solo archivos jpg y jpeg son validos");
    }
  },
});

module.exports = upload;
