const User = require('../models/User');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.json({
      success: true,
      msg: 'show all users',
      data: users
    })  
  } catch(err) {
    next(err)
  }

}

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const user = await User.findById(id);
    res.json({
      success: true,
      msg: 'show selected user',
      data: user
    })
  } catch(err) {
    next(err)
  }

}

const createUser = async (req, res, next) => {
  try {
      const { name, surname, age } = req.body;
      const user = await User.create({ name, surname, age })

      res.json({
        success: true,
        msg: 'new user created',
        data: user
      })
    } catch(err) {
      next(err)
    }
  
}

// curl -d '{"name": "Goth", "surname": "Orita", "age": 100}' -H "Content-Type: application/json" -X POST http://localhost:5000/users
// command to create a new user with specified values

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, surname, age } = req.body;

    const user = await User.findByIdAndUpdate(id, { name, surname, age }, { new: true })

    res.json({
      success: true,
      msg: `user with id ${id} updated`,
      data: user
    })
  } catch(err) {
    next(err)
  }
}

// curl -d '{"name": "Magi", "surname": "Karp", "age": 5}' -H "Content-Type: application/json" -X PUT http://localhost:5000/users/ (users/ add ID URL you want to change ), command to update(replace an item in API)


const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    res.json({
      success: true,
      msg: `user with id ${id} deleted`,
      data: user
    });
  } catch(err) {
    next(err)
  }
}

// curl -X DELETE http://localhost:5000/users/608a9eba8b02dceca8264868
// with this command I deleted an item(user) Mickey Mouse that had an ID number 608a9eba8b02dceca8264868

// below code was created to check a router

// const deleteUser = (req, res, next) => {
//   const { id } = req.params;

//   res.send(`delete user ${id}`)
// }

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
}
