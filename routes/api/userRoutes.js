const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
// Get: select all users
// Post: create user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
// get: select user
// put: update user
// delete: delete user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId'
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;