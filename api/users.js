const express = require("express");

const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser
} = require('../controllers/users.js')

const api = express.Router();

api
  .route("/")
  .get(getUsers)
  .post(createUser)

api
  .route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = api;


// Below the code before refactoring


// const express = require("express");

// const db = require('../dbinit');
// const api = express.Router();

// api
//   .route("/")
//   .get((req, res, next) => {
//     db
//      .query("SELECT * FROM users;")
//      .then(data => res.json(data.rows))
//      .catch(err => next(err))
//   })
//   .post((req, res, next) => {
//     const { name, surname, age } = req.body;
    
//     db
//      .query('INSERT INTO users(first_name, last_name, age) values($1, $2, $3);', [name, surname, age])
//      .then(data => res.status(201).json(data))
//      .catch(err => next(err))
//   })

// api
//   .route('/:id')
//   .get((req, res, next) => {
//     const { id } = req.params;
    
//     db
//      .query("SELECT * FROM users WHERE id=$1;", [id])
//      .then(data => res.json(data.rows[0]))
//      .catch(err => next(err))
//   })
//   .delete((req, res, next) => {
//     const { id } = req.params;
//     console.log(id)
//     db
//      .query("DELETE FROM users WHERE id=$1", [id])
//      .then(data => res.json(data.rows))
//      .catch(err => next(err))
//   })
//   .put((req, res, next) => {
//     const { id } = req.params;
//     const { name, surname, age } = req.body;

//     db
//      .query('UPDATE users SET first_name=$1, last_name=$2, age=$3 WHERE id=$4;', [name, surname, age, id])
//      .then(data => res.json(data))
//      .catch(e => next(e));
//   });

// module.exports = api;