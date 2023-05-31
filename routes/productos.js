var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosControllers")

/* GET users listing. */
router.get('/', productosController.getAll);

//GET by ID
router.get('/:id', productosController.getById);

//POST
router.post('/',(req,res,next)=>{req.app.verifyToken(req,res,next)}, productosController.create);

//PUT
router.put('/:id', productosController.update);

//DELETE
router.delete('/:id', productosController.delete);
module.exports = router;