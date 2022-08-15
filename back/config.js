//*============================================
//*================= CONFIG ===================
//*============================================

// Gestion des Ports
normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) { return val; }
    if (port >= 0) { return port; }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');

// Gestion des Erreurs
errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

app.on('error', errorHandler);
app.on('listening', () => {
    const address = app.address();
    console.log(address)
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log(bind)
    console.log('Listening on ' + bind);
});



