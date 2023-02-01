# SOCIAL APP NO SQL CRUD OPERATIONS

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This application allows the user to perform CRUD operations via Insomnia using Mongo DB, a cross-platform document-oriented database program (classified as NoSQL database).   
- [MongoDB](https://www.mongodb.com/)  
- [Insomnia](https://insomnia.rest/)  

[Go to Video](https://drive.google.com/file/d/1M9sQHZGiq-PXVvDeLGcBHFbV6Mx4yp8H/view?usp=sharing)  

The models used by this application are:

USER, fields:
- username
- email
- thoughts (array of thoughts created by user)
- friends (array of user's friends )
- friendcount (virtual schema that returns the number of friends the user has) 

THOUGHT, fields:
- thoughtText
- createdAt
- username (user that created the thought)
- reactions (array of reactions created by users to the thought)

REACTION (schema only), fields: 
- reactionId
- reactionBody
- username (user that created the reaction)
- createdAt

## Installation

1. Clone the main project via the HTTP or SSH link on github.  
```git clone```
2. Install all npm dependencies from the terminal.  
```npm install```


## Usage

1. Run the application using the terminal.  
```npm start```

2. To perform CRUD operations on USER, use the following paths in insomnia:

    - Get all users: http://localhost:3001/api/users  
    <img src="assets/images/GetAllUsers.png" alt="GET All Users" style="width:1000px;"/>

    - Get single user: http://localhost:3001/api/users/:idUser  
    <img src="assets/images/GetSingleUser.png" alt="GET Single User" style="width:1000px;"/>  

    - Create user: http://localhost:3001/api/users/  
    <img src="assets/images/CreateUser.png" alt="POST User" style="width:1000px;"/>  

    - Update user: http://localhost:3001/api/users/:idUser  
    <img src="assets/images/UpdateUser.png" alt="PUT User" style="width:1000px;"/>  

    - Delete user: http://localhost:3001/api/users/:idUser  
    <img src="assets/images/DeleteUser.png" alt="DELETE User" style="width:1000px;"/>  

    - Add friend to User: http://localhost:3001/api/users/:userId/friends/:friendId  
    <img src="assets/images/AddFriend.png" alt="POST Friend" style="width:1000px;"/>  

    - Remove friend form User: http://localhost:3001/api/users/:userId/friends/:friendId  
    <img src="assets/images/RemoveFriend.png" alt="DELETE Friend" style="width:1000px;"/>  

3. To perform CRUD operations on THOUGHT, use the following paths in insomnia: 

    - Get all thoughts: http://localhost:3001/api/thoughts/  
    <img src="assets/images/GetAllThoughts.png" alt="GET All Thoughts" style="width:1000px;"/>  

    - Get single thought: http://localhost:3001/api/thoughts/:idThought   
    <img src="assets/images/GetSingleThought.png" alt="GET Single User" style="width:1000px;"/>  

    - Create user: http://localhost:3001/api/thoughts/  
    <img src="assets/images/CreateThought.png" alt="POST Thought" style="width:1000px;"/>  

    - Update user: http://localhost:3001/api/thoughts/:idThought  
    <img src="assets/images/UpdateThought.png" alt="PUT Thought" style="width:1000px;"/>  

    - Delete user: http://localhost:3001/api/thoughts/:idThought   
    <img src="assets/images/DeleteThought.png" alt="DELETE Thought" style="width:1000px;"/>  

    - Add Reaction to Thought: http://localhost:3001/api/thoughts/:thoughtId/reactions  
    <img src="assets/images/AddReaction.png" alt="POST Reaction" style="width:1000px;"/>  

    - Remove Reaction form Thought: http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId  
    <img src="assets/images/RemoveReaction.png" alt="DELETE Reaction" style="width:1000px;"/>  

## Licenses

### MIT
https://opensource.org/licenses/MIT  

-- 

## Contributing

Jaime Esquivel https://github.com/jaime-a-esquivel-a

--

## Tests

No tests were developed for this app.

--

## Questions

Please contact the author:

Name: Jaime Esquivel

e-mail: jaime.a.esquivel.a@gmail.com

GitHub User: https://github.com/jaime-a-esquivel-a

GitHub Repo: https://github.com/jaime-a-esquivel-a/StartUpSocialApp
