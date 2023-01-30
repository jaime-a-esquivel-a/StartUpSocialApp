const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thought
// Get: select all thoughts
// Post: create thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thoughtId
// get: select thought
// put: update thought
// delete: delete thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thought/:thoughtId/reaction/:friendId'
router.route('/:thoughtId/reactions/').post(addReaction).delete(removeReaction);

// /api/thought/:thoughtId/reaction/:reactionId'
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;