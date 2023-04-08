console.log("hello world")
// this is where you paste your api key
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
ccStreamer.on('open', function open() {
    var subRequest = {
        "action": "SubAdd",
        "subs": ["2~Binance~BTC~USDT"]
    };
    ccStreamer.send(JSON.stringify(subRequest));
    console.log("Subscribed to Binance BTC/USD");
});

ccStreamer.on('message', function incoming(data) {
    var message = JSON.parse(data);
    if (message.TYPE && message.TYPE === "2") {
        if (message.PRICE) {
            console.log("Binance BTC/USD: " + message.PRICE);
        }
    }

    
});
// while(true) {
//     ccStreamer.onmessage = (message) => {
//         console.log(message.data);
//     }
// }
