// client
const WebSocket = require('ws');

const streamer = new WebSocket('ws://localhost:8080');

streamer.on('open', function open() {
    console.log('connected');
}   
);

streamer.on('message', function incoming(data) {
    console.log(data.toString());
}
);
