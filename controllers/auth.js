const { response } = require('express');
const User = require('../models/user')

const createNewUser = async ( req, res = response ) => {

    const user = new User( req.body );
    //Save new user in database
    await user.save();
    
    res.json({
        ok: true,
        body: req.body
    });
}

module.exports = {
    createNewUser
}