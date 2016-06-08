var socketIO = require('socket.io.js'),
    http = require('http'),
    port = process.env.PORT || 8080,
    ip = process.env.IP || '127.0.0.1',
    server = http.createServer().listen(port, ip, function(){
        console.log('Started Socket.IO');
    }),
    io = socketIO.listen(server);
io.set('match origin procotol', true);
io.set('origins', '*:*');
var run = function (socket){
    socket.emit('access', 'Access successfully!');
    socket.on('user-join', function (data) {
        console.log('User ' + data + ' have joined');
        socket.broadcast.emit('new-user', data);
        
    });
}