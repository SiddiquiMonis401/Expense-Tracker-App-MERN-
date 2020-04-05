const express=require("express");
const dotEnv=require("dotenv");
const colors=require("colors");
const morgan=require("morgan");
const db=require('./confg/db')
const mongoose=require('mongoose')
const app=express();

const connectionfunc= () => {
    mongoose.connect("mongodb+srv://monis:monis123@expensetracker-qnve5.gcp.mongodb.net/ExpenseTrackerdb?retryWrites=true&w=majority").then(res => console.log("connected sucessfully")).catch(err=>console.log(err));
}
 connectionfunc();


dotEnv.config({path:'./confg/confg.env'})

const port=process.env.port || 5000;
app.use(express.json());
const transictions=require('./transictions/transictionsroutes');




app.use('/transictions',transictions);

app.listen(port,() => {
    console.log(`Server Started at port ${port}`.yellow.bold.underline)
})


