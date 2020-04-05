const mongoose=require('mongoose');
const dbConnection= async () => {
    try{
        console.log("here")
         const conn= await mongoose.connect(process.env.MONGO_URI, {
             useNewUrlParser:true,
             useUnifiedTopology:true
         });

         console.log(conn)
         
         console.log(`sucessfully connected to the database:`.cyan.bold.ialic)
    }
    catch(err){
        console.log(`error ${err} occured during the database connections`.red)
        

    }
}
module.exports=dbConnection;