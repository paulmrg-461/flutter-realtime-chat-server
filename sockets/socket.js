const { checkJWT } = require('../helpers/jwt');
const { io } = require('../index');
const { userOnline, userOffline } = require('../controllers/socket');

// Mensajes de Sockets
io.on('connection', client => {
    console.log('Client is online');
    const [ valid, uid ] = checkJWT(client.handshake.headers['x-token']);

    //Check authentication
    if( !valid ) { return client.disconnect(); }

    //Client authenticated
    userOnline(uid);

    client.on('disconnect', () => {
        userOffline( uid );
    });

    /* client.on('mensaje', ( payload ) => {
        console.log('Message', payload);
        io.emit( 'mensaje', { admin: 'New message' } );
    }); */
});
