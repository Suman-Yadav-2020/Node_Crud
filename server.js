const  express=require('express');
const route=require('./product/router');
require('dotenv').config();


app=express();
const db=require('./config/db');
app.use(express.json());
app.use('/api',route);

app.listen(process.env.PORT,()=>{
    console.log("App Listrening on port "+process.env.PORT);
})