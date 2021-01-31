const { checkJWT } = require('../helpers/jwt');
const { io } = require('../index');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Client is online');
    const [ valid, uid ] = checkJWT(client.handshake.headers['x-token']);
    
    if( !valid ) { return client.disconnect(); }

    client.on('disconnect', () => {
        console.log('Client is offline');
    });

    /* client.on('mensaje', ( payload ) => {
        console.log('Message', payload);
        io.emit( 'mensaje', { admin: 'New message' } );
    }); */
});
