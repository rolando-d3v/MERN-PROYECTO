const {Router} = require('express');

const {loginUser} = require('../controllers/loginController')
const router = Router()

router.post('/user/login', loginUser )

module.exports = router