const student = require("../db/mongoSchema")

// add data
exports.addstudent=async(req,res)=>{

    const{username,email,date,phone}=req.body

    try{
        // check user aleredy exist
        const preuser=await student.findOne({email})
        if(preuser){
            res.status(406).json("user alredy exist");
            
        }else{
            // add new user 
            const newstudent=new student({
               username,email,date,phone
            })

            await newstudent.save()
            res.status(200).json(newstudent)
        }

    }catch(err){
        res.status(401).json('error'+err)
    }
}       

// getstudent

exports.getallstudent=async(req,res)=>{
    try{
        const allusers=await student.find();
         res.status(200).json(allusers)
    }
    catch(err){
        res.status(401).json('error'+err)
    }
}


// delete student
exports.deletestudent=async(req,res)=>{
    const{id}=req.params
    try {
  const removestudent=await student.findByIdAndDelete({_id:id})
res.status(200).json(removestudent)    
    } catch (err) {
        res.status(401).json(err)
    }
}


// update student
exports.editstudent=async(req,res)=>{
    const{id}=req.params
    const{username,email,date,phone}=req.body
    try{
        const updatetudent=await student.findByIdAndUpdate({_id:id},
          {username,email,date,phone},{new:true})
        //   {new:true} reuturn update document rather than original document 
        await updatetudent.save()
        res.status(200).json(updatetudent)
    }
    catch(err){
        res.status(401).json(err)
    }

}