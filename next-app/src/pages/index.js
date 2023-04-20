import Image from 'next/image'
import { Inter } from 'next/font/google'
import Consumer from './Consumer'
const inter = Inter({ subsets: ['latin'] })
import { useState } from 'react'

let count = 0

function increment(){
    count += 1
}

function get_count(){
    return count
}

export default function Home({counter,data}) {
 
 
  const proj = "03_ssr-counter"

  console.log("Hello from home page function")
  return (
    <main >
      <div >
        <p>counter = {counter}</p>
        <p>data = {data}</p>
      </div>
      
       
      
    </main>
  )
}

export async function getServerSideProps(context) {

  let data = 0;

  async function run() {
    console.log('hello')
      
      
        setTimeout(() => {
          data++;
        }
        , 1000);
      
    }
  await run()
  increment()
  const counter = get_count()
  console.log("Hello from getServerSideProps()")

  return {
    props: {counter,data}, // will be passed to the page component as props
  }
}
