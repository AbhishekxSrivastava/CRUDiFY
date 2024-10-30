const User = require('../models/user');

async function HandleGetAllUsers(req, res)  {
    const allDBUsers = await User.find({});
    return res.json(allDBUsers);
};

async function HandleGetUserByID (req, res) {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({msg : "User not found"});
    return res.json(user);
}

async function HandleUpdateUserByID(req,res) {
    await User.findByIdAndUpdate(req.params.id, {lastName : 'Stark'});
    return res.json({status:'Success'}); 
}

async function HandleDeleteUserByID(req,res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:'Success'});
}

async function HandleCreateNewUser(req,res) {
    const body = req.body;
    if(!body || !body.firstName || !body.lastName || !body.email || !body.gender) {
        return res.status(400).json({msg : "Error in the req..."});
    }

    const result = await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        gender : body.gender,
    });

    console.log("Result => " + result);

    return res.status(201).json({msg : "Success", id: result._id});
}


module.exports = {
    HandleGetAllUsers,
    HandleGetUserByID,
    HandleUpdateUserByID,
    HandleDeleteUserByID,
    HandleCreateNewUser,
}