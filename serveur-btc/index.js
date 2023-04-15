console.log("hello world")
require('dotenv').config();
let apiKey = process.env.CC_API_KEY;
const WebSocket = require('ws');
const ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);
 ccStreamer.on('open', function open() {
    var subRequest = {
        "action": "SubRemove",
        "subs": ["2~Binance~BTC~USDT"]
    };
  ccStreamer.send(JSON.stringify(subRequest));
  console.log("Unsubscribed to Binance BTC/USDT");
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
