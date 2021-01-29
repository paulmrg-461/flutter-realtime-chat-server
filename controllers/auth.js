const { response } = require('express')

const createNewUser = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'Create new user!'
    });
}

module.exports = {
    createNewUser
}