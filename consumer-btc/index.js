//require kafka
const { Kafka } = require('kafkajs')
var WebSocketServer = require('websocket').server;
var http = require('http');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

const consumer = kafka.consumer({groupId: 'test-group'})

var server = http.createServer(function(request, response) {
    console.log(' Request recieved : ' + request.url);
    response.writeHead(404);
    response.end();
   });
   server.listen(8080, function() {
    console.log('Listening on port : 8080');
   });
    
   WebSocketServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false,
    
   });
    
   function iSOriginAllowed(origin) {
    return true;
   }
    
   WebSocketServer.on('request', async function(request) {
    if (!iSOriginAllowed(request.origin)) {
    request.reject();
    onsole.log('malou');
    console.log(' Connection from : ' + request.origin + ' rejected.');
    return;
    }
    
    var connection = request.accept('echo-protocol', request.origin);
    onsole.log('khalil');
    console.log(' Connection accepted : ' + request.origin);
    connection.on('message', function(message) {
    if (message.type === 'utf8') {
    console.log('Received Message: ' + message.value.toString());
    }
    });

    //const run = async () => {
        await consumer.connect()
        await consumer.subscribe({topic: 'btc-price', fromBeginning: true})
        await consumer.run({
            eachMessage: async ({topic, partition, message}) => {
                connection.sendUTF(message.value.toString());
                console.log({
                    value: message.value.toString(),
                })
    
            },
        })
    //}
    connection.on('close', function(reasonCode, description) {
        console.log('Connection ' + connection.remoteAddress + ' disconnected.');
        });
       });


      // run().catch(console.error)