const ip = require('ip')
import { useEffect, useState } from 'react'

const { Kafka } = require('kafkajs')

export default function Page({data}) {
 
    // Render data...
    {console.log("hell")}
    return <div>Consumer: {data}</div>
  }
  
  // This gets called on every request
  export async function getServerSideProps(context) {
    const [data, setData] = useState(0)

    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['localhost:9092']
    })
    async function run() {
      console.log('hello')
    /* const consumer = kafka.consumer()
        await consumer.connect()
        await consumer.subscribe({ topic: 'btc-price', fromBeginning: true })
         await consumer.run({
          // eachBatch: async ({ batch }) => {
          //   console.log(batch)
          // },
          eachMessage: async ({ topic, partition, message }) => {
            const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
            console.log(`- ${prefix} ${message.key}#${message.value}`)
          },
        })*/
        //make timer that sets the state of value 
        setTimeout(() => {
          setData(data+1)
        }
        , 1000);
        

       
      
      }
   
    await run()
    // Pass data to the page via props
    return { props: {data} }

  }