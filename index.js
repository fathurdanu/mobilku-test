require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.status(200).json({message:'test mobilku'})
})

const dataDiriRoutes = require('./routes/user');
app.use('/users', dataDiriRoutes);

app.use('/images',express.static('./assets/img'));

app.listen(port,()=>{
    console.log(port)
})