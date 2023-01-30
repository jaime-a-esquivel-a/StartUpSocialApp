const router = require('express').Router();
const {
  getThoughts,
  //getSingleThought,
  createThought,
  //updateUser,
  //deleteUser,
  //addFriend,
  //removeFriend,
} = require('../../controllers/thoughtController');

// /api/thought
// Get: select all thoughts
// Post: create thought
router.route('/').get(getThoughts).post(createThought);

module.exports = router;