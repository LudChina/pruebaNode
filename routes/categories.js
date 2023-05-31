var express = require('express');
var router = express.Router();
const categoriesController = require("../controllers/categoriesControllers")

router.get('/', categoriesController.getAll);
router.post('/', categoriesController.create);


module.exports = router;