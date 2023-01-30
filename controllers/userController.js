const { User, Thought } = require('../models');

module.exports = {

    getUsers(req, res) {
      User.find()
        .then(async (users) => {
          const userObj = {
            users,
          };
          return res.json(userObj);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    createUser(req, res){

      User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));

    },
    updateUser(req, res){

      const filter = { _id: req.params.userId };
      const update = req.body;

      User.findOneAndUpdate(filter, update, {
        new: true,
        runValidators: true,
      })
      .then( async (user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : res.json({
              user,
            })
      )
      .catch((err) => {

        console.log(err);
        return res.status(500).json(err);

      });

    },
    getSingleUser(req, res){

      User.findOne({ _id: req.params.userId })
      .select('-__v')
      .lean()
      .then( async (user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : res.json({
              user,
            })
      )
      .catch((err) => {

        console.log(err);
        return res.status(500).json(err);

      });

    },
    deleteUser(req, res){
      User.findOneAndRemove({ _id: req.params.userId })
      .then( async (user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID, cannot remove' })
          : res.json({
              user,
            })
      )
      .catch((err) => {

        console.log(err);
        return res.status(500).json(err);

      });
    },
    addFriend(req, res){

      const filter = { _id: req.params.userId };
      const update = { 
        $addToSet: { friends: req.params.friendId } 
      };

      User.findOneAndUpdate(filter, update, {
        new: true,
        runValidators: true,
      })
      .then( async (user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : res.json({
              user,
            })
      )
      .catch((err) => {

        console.log(err);
        return res.status(500).json(err);

      });

    },
    removeFriend(req, res){

      const filter = { _id: req.params.userId };
      const update = { 
        $pull: { friends: req.params.friendId } 
      };

      User.findOneAndUpdate(filter, update, {
        new: true,
        runValidators: true,
      })
      .then( async (user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : res.json({
              user,
            })
      )
      .catch((err) => {

        console.log(err);
        return res.status(500).json(err);

      });

    }

};