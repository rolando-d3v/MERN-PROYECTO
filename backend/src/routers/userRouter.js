const {Router} = require('express');

//_* MIDDLEWARE
const {verificaToken, verificaToken_ADMIN_ROLE} = require('../middlewares/authToken');

const router = Router()
const {createUser, getUsers, getUser, deleteUser} = require('../controllers/userController')

router.post('/user', createUser)
router.get('/user',verificaToken, verificaToken_ADMIN_ROLE,  getUsers)
router.get('/user/:idUser',verificaToken, getUser)
router.delete('/user/:idUser', deleteUser)

module.exports = router