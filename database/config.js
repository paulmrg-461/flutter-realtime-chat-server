const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        console.log('Init DB config')
    } catch (error) {
        console.log(error);
        throw new Error('Database error - Contact the administrator.')
    }
}

module.exports = {
    dbConnection
}