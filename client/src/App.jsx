import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Kafka } from 'kafkajs'


function App() {

  const kafka = new Kafka({
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
  }
 
  return (
    <div className="App">
      <h1>
        hello
      </h1>
       
    </div>
  )
}

export default App
