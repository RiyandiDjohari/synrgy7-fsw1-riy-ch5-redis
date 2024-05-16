
const router = require('express').Router();
const { getPosts } = require('../service/postsService');

router.get('/:id', getPosts)
// router.get('/:id', getUsersById)
// router.post('/', createUsers)
// router.delete('/:id' ,deleteUsers)
// router.put('/:id', updateUsers)

module.exports = router;
