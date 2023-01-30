const connection = require('../config/connection');
const { User, Thought } = require('../models');
//const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {

  console.log('connected');

 await Thought.deleteMany({});
 await User.deleteMany({});

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

 const users = [
    {
        username: 'USR_01',
        email: 'usr01@testmail.com',
        thoughts: thoughts_usr01,

    },
    {
        username: 'USR_02',
        email: 'usr02@testmail.com',
        thoughts: thoughts_usr02,
    },
    {
        username: 'USR_03',
        email: 'usr03@testmail.com',
    },
 ];

 await User.collection.insertMany(users);
 await Thought.collection.insertMany(thoughts);

 // Cierra la sesión de los datos de siembra para indicar lo que debería aparecer en la base de datos
 console.table(users);
 console.table(thoughts);
 console.info('Seeding complete!');
 process.exit(0);

});

