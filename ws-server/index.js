// server

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('connected');
    wss.on('error', function error(err) {
        console.log(err);
    }
    );
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    }
    );
    ws.send('something');
}
)