const transiction=require('../models/TransictionModel');

//@desc this is the function for getting the transiction 
// method is get
// acess=public
exports.getTransictions = async  (req,res,next) => {
    try{
        const transictiondata= await transiction.find();

       return  res.status(200).json({
           success:true,
           count:transictiondata.length,
           data:transictiondata,

       });
    }catch(err){
        res.status(500).json({
            success:false,
            error:"server error"
        })
    }
};
//@desc this is the function for getting the transiction 
// method is post
// acess=public
exports.addTransictions = async (req,res,next) => {
    try{
        const transictionpost= await transiction.create(req.body);

       return  res.status(201).json({
           success:true, 
           data:transictionpost,

       });
    }catch(err){
        res.status(500).json({
            success:false,
            error:"server error",
            msg:err
        })
    }
};

exports.delTransictions = async (req,res,next) => {
   try{
       const transictionDel = transiction.findById(req.params.id);
       if(!transictionDel){
           return res.status(404).json({
               success:false,
               msg:'No transictions found',
           })
       }

        await transictionDel.remove();
     
        return res.status(200).json({
            success:true,
           data:{}
        })  


   }
    catch(err){
        res.status(500).json({
            success:false,
            error:"server error",
            msg:err
        })
   }
   
    
};