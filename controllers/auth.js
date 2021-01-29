const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { generateJWT } = require('../helpers/jwt');


const createNewUser = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {
        const emailRegistered = await User.findOne({ email });

        if(emailRegistered) {
            return res.status(400).json({
                ok: false,
                msg: 'This email is already registered'
            });
        }

        const user = new User( req.body );

        //Encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt )

        //Save new user in database
        await user.save();

        // Generate my JWT
        const token = await generateJWT( user.id );
        
        res.json({
            ok: true,
            user, 
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'There was a problem! Please contact the administrator.'
        })
    }

}

module.exports = {
    createNewUser
}