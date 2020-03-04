const controller=require('./controller.js');
const router=require('express').Router();



router.post('/add',controller.create);
router.get('/get',controller.list);
router.delete('/delete/:id',controller.delete);





module.exports=router;