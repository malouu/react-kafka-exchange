console.log("hello world")
// this is where you paste your api key
let apiKey = "687be1cd51d1910885ccb05ff32306ff5c6a6826945a6ff8fa0be09ed073ffc2";
const WebSocket = require('ws');
const ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);

ccStreamer.on('open', function open() {
    var subRequest = {
        "action": "SubAdd",
        "subs": ["2~Binance~BTC~USD"]
    };
    ccStreamer.send(JSON.stringify(subRequest));
    console.log("Subscribed to Binance BTC/USD");
});

ccStreamer.on('message', function incoming(data) {
    console.log("reading data")
    //console.log(data);

    var mess = JSON.parse(data);
    console.log("hi")
    console.log(data)
    //data is in a buffer, so you need to convert it to a string
    console.log(data.toString());
    console.log(mess);
    //console.log(mess.TYPE);
    //console.log(mess.PRICE);
    //console.log(mess.MARKET);

    
});
//close the connection after 10 seconds
setTimeout(function() {
    ccStreamer.close(1000, "close");
}
, 1000);
