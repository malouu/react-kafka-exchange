import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import WebSocket from 'websocket'
import WebSocket from 'ws'

import './App.css'

//import { Kafka } from 'kafkajs'

//function webSocketInvoke() {
 
  
  
function App() {
  // if (WebSocket in window) {
  //   console.log('WebSocket is supported by your Browser!');
  //   var ws = new WebSocket('ws://localhost:8080/”,”echo-protocol');
    
  //   ws.onopen = function() {
  //   console.log('Connection created');
  //   };
    
  //   ws.onmessage = function (evt) { 
  //   var received_msg = evt.data;
  //   console.log(received_msg );
  //   };
    
  //   ws.onclose = function() { 
  //   console.log('Connection closed'); 
  //   };
  //   } else {
  //   alert('WebSocket NOT supported by your Browser!');
  //   }
    
  //{webSocketInvoke()};

 /* const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})
async function run() {
  console.log('hello')
const consumer = kafka.consumer()

await consumer.connect()
await consumer.subscribe({ topic: 'btc-price', fromBeginning: true })

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString(),
    })

  },
})
  }*/

  const [price, setPrice] = useState(0)
  const ws = new WebSocket('ws://localhost:8080/', {
    perMessageDeflate: false
  });
  ws.on('open', function open() {
    console.log('connected');
  });
  ws.on('message', function incoming(data) {
    console.log(data);
    setPrice(data)
  });

  
 
  return (
    <div className="App">
      <h1>
        hello
      </h1>
      <h2>Price: {price}</h2>
       
    </div>
  )
}

export default App
