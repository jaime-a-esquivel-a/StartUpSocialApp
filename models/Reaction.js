const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        }
        //CreatedAt -> using timestamps,
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
        timestamps: true,
    }
);

module.exports = reactionSchema;