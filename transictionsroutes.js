const express=require('express');
const router=express.Router();
const { getTransictions,addTransictions,delTransictions }=require('../Controllers/TransictionControlers');

router.route('/').get(getTransictions);
router.route('/post').post(addTransictions);
router.route('/:id').delete(delTransictions);

module.exports=router;