const connection = require('../config/connection');
const { User, Thought } = require('../models');
//const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {

  console.log('connected');

 await Thought.deleteMany({});
 await User.deleteMany({});

 /*
 const thoughts_usr01 = [
    {
        thoughtText: 'Thought txt usr01 by usr01',
        username: 'USR_01',
    },
    {
        thoughtText: 'Thought txt usr01 by usr02',
        username: 'USR_02',
    },
 ];

 const thoughts_usr02 = [
    {
        thoughtText: 'Thought txt usr02 by usr02',
        username: 'USR_02',
    },
    {
        thoughtText: 'Thought txt usr02 by usr03',
        username: 'USR_03',
    },
 ];

 const thoughts = thoughts_usr01.concat(thoughts_usr02);
 */

 const users = [
    {
        username: 'lewis44',
        email: 'lh44@mercedes.com',
        //thoughts: thoughts_usr01,

    },
    {
        username: 'george63',
        email: 'gr63@mercedes.com',
        //thoughts: thoughts_usr02,
    },
    {
        username: 'max33',
        email: 'mv33@redbull.com',
    },
    {
        username: 'lance18',
        email: 'ls18@aston-martin.com',
    },
 ];

 await User.collection.insertMany(users);
 //await Thought.collection.insertMany(thoughts);

 console.table(users);
 console.table(thoughts);
 console.info('Seeding complete!');
 process.exit(0);

});

