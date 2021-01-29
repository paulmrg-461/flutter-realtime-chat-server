const { io } = require('../index');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Client is online');

    client.on('disconnect', () => {
        console.log('Client is offline');
    });

    /* client.on('mensaje', ( payload ) => {
        console.log('Message', payload);
        io.emit( 'mensaje', { admin: 'New message' } );
    }); */


});
