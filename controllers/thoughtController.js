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
    getSingleThought(req, res){

        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        //.lean()
        .then( async (thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought found with that ID' })
            : res.json({
                thought,
              })
        )
        .catch((err) => {
  
          console.log(err);
          return res.status(500).json(err);
  
        });
  
    },
    updateThought(req, res){
        
        const filter = { _id: req.params.thoughtId };
        const update = { thoughtText : req.body.thoughtText };

        Thought.findOneAndUpdate(filter, update, {
            new: true,
            runValidators: true,
          })
          .then( async (thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought found with that ID' })
              : res.json({
                  thought,
                })
          )
          .catch((err) => {
    
            console.log(err);
            return res.status(500).json(err);
    
          });

    },
    deleteThought(req, res){
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
        .then( async (thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought found with that ID, cannot remove' })
            : res.json({
                thought,
              })
        )
        .catch((err) => {
  
          console.log(err);
          return res.status(500).json(err);
  
        });
    },
    addReaction(req, res){

        const filter = { _id: req.params.thoughtId };
        const update = { 
            $addToSet: { reactions: req.body } 
        };

        Thought.findOneAndUpdate(filter, update, {
            new: true,
            runValidators: true,
        })
        .then( async (thought) =>
            !Thought
            ? res.status(404).json({ message: 'No thought found with that ID' })
            : res.json({
                thought,
                })
        )
        .catch((err) => {

            console.log(err);
            return res.status(500).json(err);

        });

    },
    removeReaction(req, res){

        const filter = { _id: req.params.thoughtId };
        const update = { 
            $pull: {  reactions: { reactionId: req.params.reactionId } } 
        };

        Thought.findOneAndUpdate(filter, update, {
            new: true,
            runValidators: true,
          })
          .then( async (thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought found with that ID' })
              : res.json({
                  thought,
                })
          )
          .catch((err) => {
    
            console.log(err);
            return res.status(500).json(err);
    
          });

    }

};