const mongoose = require('mongoose');
require('./config')

let db = process.env.URLDB

mongoose.connect(db, {
    useCreateIndex: true,
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false,
},()=>{
    console.log('db server connect');
})