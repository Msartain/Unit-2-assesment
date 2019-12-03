var express = require('express');
var router = express.Router();
let todoCtrl = require('../controller/todos');

router.get('/', todoCtrl.index)
router.post('/new', todoCtrl.create)
router.delete('/:id', todoCtrl.delete)

module.exports = router;
