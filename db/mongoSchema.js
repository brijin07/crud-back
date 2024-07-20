const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true, 
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    date:{
        type:String,
        required:true,
    },

    phone:{
        
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
   
})

// here the 'students' is collection name
const student=new mongoose.model('students',userSchema);

module.exports=student