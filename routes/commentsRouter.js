
const router = require('express').Router();
const { getComments } = require('../service/commentsService');

router.get('/', getComments)

module.exports = router;
