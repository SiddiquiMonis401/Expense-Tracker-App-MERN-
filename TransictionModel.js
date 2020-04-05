const mongoose=require('mongoose');

const transictionSchema=new mongoose.Schema({
    text:{
        type:String,
        require:[true,'please enter the type of transictions'],
        trim:true
    },
    amount:{
        type:Number,
        required:[true,'plz enter the amount'],
        
    },
    createdAt:{
      type:Date,
      default:Date.now   
    }
})
module.exports=mongoose.model('transictions',transictionSchema);