// import express 
const express=require('express')

const studentcontroll=require('../controller/studentcontroll')

const router=new express.Router()

router.post('/addStudent',studentcontroll.addstudent)

router.get('/getStudent',studentcontroll.getallstudent);

router.delete('/deletestudent/:id',studentcontroll.deletestudent);

router.put('/updatestudent/:id',studentcontroll.editstudent);

module.exports=router;
