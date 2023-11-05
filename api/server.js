const express = require('express')
const cors = require('cors')
const serviceRouter = require("./routes/service");
const userRouter = require('./routes/api/user.routes')
const multer =require('multer')
const upload = multer({ dest: 'uploads/' });
require('dotenv').config();


const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/service",serviceRouter)
app.use('/user' , userRouter )



app.listen(3000,()=>{
    console.log ("server lisnting ")
})