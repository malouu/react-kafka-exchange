 let apiKey = "ee46c01762545a524dc9e614b037f8e016a09c98b44d3fcfaf331ca0bf11b4a3";
 const WebSocket = require('ws');
const ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);
 ccStreamer.on('open', function open() {
    var subRequest = {
        "action": "SubRemove",
        "subs": ["2~Binance~BTC~USD"]
    };
  ccStreamer.send(JSON.stringify(subRequest));
  console.log("Unsubscribed to Binance BTC/USD");
 });

//  ccStreamer.removeAllListeners();




//ccStreamer.close(1000, "close");
//close any open connections
