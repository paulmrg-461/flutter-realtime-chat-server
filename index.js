const express = require('express');
const path = require('path');
require('dotenv').config();

//DB Config
require('./database/config').dbConnection();

// App de Express
const app = express();

// Body parsing and reading
app.use( express.json() );

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

// Public path
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );

// My Routes
app.use('/api/login', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

server.listen( process.env.PORT, ( err ) => {
    if ( err ) throw new Error(err);
    console.log('Server is online in port:', process.env.PORT );
});


