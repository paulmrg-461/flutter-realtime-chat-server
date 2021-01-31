const { checkJWT } = require('../helpers/jwt');
const { io } = require('../index');
const { userOnline, userOffline } = require('../controllers/socket');

// Mensajes de Sockets
io.on('connection', client => {
    const [ valid, uid ] = checkJWT(client.handshake.headers['x-token']);

    //Check authentication
    if( !valid ) { return client.disconnect(); }

    //Client authenticated
    userOnline(uid);

    //User login at particular room
    //Global room, client.id, 
    client.join(uid);
    // Listen personal message from client
    client.on('personal-message', (payload) => {
        console.log(payload);
    });

    client.on('disconnect', () => {
        userOffline( uid );
    });

    /* client.on('mensaje', ( payload ) => {
        console.log('Message', payload);
        io.emit( 'mensaje', { admin: 'New message' } );
    }); */
});
