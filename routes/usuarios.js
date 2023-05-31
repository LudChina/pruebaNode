var express = require('express');
var router = express.Router();
const usuariosController = require("../controllers/usuariosControllers");
const usuariosControllers = require('../controllers/usuariosControllers');

router.post('/', usuariosController.create);
router.post('/login', usuariosController.login);

module.exports = router;