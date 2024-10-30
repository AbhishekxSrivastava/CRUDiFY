const express = require('express');
const {HandleGetAllUsers, HandleGetUserByID, HandleUpdateUserByID, HandleDeleteUserByID, HandleCreateNewUser} = require('../controllers/user');
const Router = express.Router();

//Routes
// Router.get('/users', async (req, res) => {
//     const allDBUsers = await User.find({});
//     const html = `
//         <ul>
//             ${allDBUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//         </ul>
//     `;
//     res.send(html);
// });

Router.get('/', HandleGetAllUsers);

Router.get('/:id', HandleGetUserByID);

Router.patch('/:id', HandleUpdateUserByID);

Router.delete(' /:id', HandleDeleteUserByID);
 

// Using MongoDB
Router.post('/', HandleCreateNewUser);

module.exports = Router;