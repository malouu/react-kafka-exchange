 let apiKey = "ae1e6390fa433db7ed05b381ab08430d25847c3204bc1d95dc9f089a2ad0394b";
 const WebSocket = require('ws');
const ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);
 ccStreamer.on('open', function open() {
    var subRequest = {
        "action": "SubRemove",
        "subs": ["2~Binance~BTC~USD"]
    };
  ccStreamer.send(JSON.stringify(subRequest));
   console.log("Subscribed to Binance BTC/USD");
 });




//ccStreamer.close(1000, "close");
//close any open connections
