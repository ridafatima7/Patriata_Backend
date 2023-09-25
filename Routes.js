const express=require('express');
const router=express.Router();
const Controller=require('./Cities');
router.get('/add_data',Controller.add_data);
router.get('/get_data',Controller.get_data);
router.get('/delete_data',Controller.delete_data);
module.exports=router;