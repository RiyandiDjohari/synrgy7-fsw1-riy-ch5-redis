
const router = require('express').Router();
const { getUsers } = require('../service/usersService');

router.get('/', getUsers)
// router.get('/:id', getUsersById)
// router.post('/', createUsers)
// router.delete('/:id' ,deleteUsers)
// router.put('/:id', updateUsers)

module.exports = router;
