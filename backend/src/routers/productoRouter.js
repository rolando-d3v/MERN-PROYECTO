const {Router} = require('express');

//_*MIDDLEWARE
const upload = require('../middlewares/multer')
const {verificaToken} = require('../middlewares/authToken');

//_*ROUTERS
const {getProductos, getProducto, createProducto, deleteProducto, buscarProducto} = require('../controllers/productoController')
const router = Router()

router.get('/productos' , getProductos)
router.get('/productos/:idProducto' , getProducto)
router.post('/productos', upload.single('photo') , createProducto)
router.delete('/productos/:idProducto' , deleteProducto)

//busqueda
router.get('/productos/buscar/:name' , buscarProducto)
module.exports = router