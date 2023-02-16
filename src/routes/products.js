// ************ Require's ************
const express = require('express');
const router = express.Router();

const{uploadImageProduct} = require('../middlewares/uploadFiles')
const productsController = require('../controllers/productsController');
const adminUserCheck = require('../middlewares/adminUserCheck')

router.get('/', productsController.index); 
router.get('/create',adminUserCheck, productsController.create); 
router.post('/store',uploadImageProduct.single('image'), productsController.store); 
router.get ('/detail/:id/', productsController.detail); 
router.get('/edit/:id',adminUserCheck, productsController.edit); 
router.put('/update/:id', productsController.update); 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
