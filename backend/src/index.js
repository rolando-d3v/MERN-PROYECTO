const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const morgan = require('morgan');
const app = express()
require('./config')


//APP SERVER
const port = process.env.PORT
app.listen(port, ()=> {
    console.log('server connect on port ' + port);
})

//DB SERVER MONGODB
require('./db')

//MIDDELEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'))

//STATIC EXPRESS
app.use(express.static(path.join( __dirname,'public')))

//ROUTERS
app.use('/api/v1' , require('./routers/productoRouter'))
app.use('/api/v1', require('./routers/userRouter'))
app.use('/api/v1', require('./routers/loginRouter'))