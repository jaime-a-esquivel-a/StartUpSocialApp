const { User, Thought } = require('../models');

module.exports = {

    getThoughts(req, res) {

        Thought.find()
        .then(async (thoughts) => {

            const thoughtObj = {
                thoughts,
            };
            return res.json(thoughtObj);

        })
        .catch((err) => {

            console.log(err);
            return res.status(500).json(err);

        });
    },
    createThought(req, res) {

        Thought.create(req.body)
        .then(({ _id }) => {

            return User.findOneAndUpdate(

                { username: req.body.username },
                { $push: { thoughts: _id } },
                { new: true }

            );

        })
        .then( async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No user found with that username' })
          : res.json({
              thought,
            })
        )
        .catch((err) => res.status(500).json(err));
  
      },

};