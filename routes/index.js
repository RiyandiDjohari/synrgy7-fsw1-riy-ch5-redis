const router = require('express').Router();
const usersRouter = require('./usersRouter');
const postsRouter = require('./postsRouter');
const commentsRouter = require('./commentsRouter');

router.use('/users', usersRouter)
router.use('/posts', postsRouter)
router.use('/comments', commentsRouter)

module.exports = router;