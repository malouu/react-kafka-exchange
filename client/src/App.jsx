import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
  
  
function App() {
  const [price, setPrice] = useState(0)
  const [ws, setWs] = useState(null)
  const [color, setColor] = useState('')
  const [data,setData] = useState([]);
  const [seconds, setSeconds] = useState([]);
  const deadline = "December, 31, 2023";
  const time = Date.parse(deadline) - Date.now();
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      //si la taille de second est superiur a 20 on supprime le premier element
      if (seconds.length > 10) {
        seconds.shift()
      }
      setSeconds([...seconds,Math.floor((time / 1000) % 60)]);
    }, 1000); 
    return () => clearInterval(interval);
  }, [seconds]);


  console.log(seconds);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    
    responsive: true,
    plugins: {
      legend: {
        position: 'top' 
      },
      title: {
        display: true,
        text: 'Chart Line',
      },
    },
  };
  
 /// const labels = [1,2,3,4,5,6,7,8,9];
  
  const datavisulise = {
    labels: seconds,
    datasets: [
      {
        label: 'BTC/second',
        data: data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        //hide points
        pointRadius: 0,
        //largest hight and width
        


        

      },
      
    ],
  };

  if (!ws) {
    const ws = new WebSocket('ws://localhost:8080/'); 
    setWs(ws)
    ws.onopen = function() {
      console.log('Connection created');
      }
  }
 
  if (ws) {
    ws.onmessage = function (evt) { 
      var received_msg = evt.data;
      // console.log(received_msg );
      if (received_msg > price) {
        setColor('green')
      }
      else if (received_msg < price) {
        setColor('red')
      }
      else {
        setColor('black')
      }
      setPrice(received_msg)
      
      if (data.length > 10) {
        data.shift()
      }
      setData([...data,received_msg])
      };
     
  }


  
 
  return (
    <div className="App">
      <h1>
        BTC Price
      </h1>
      <h2 className={color}>Price: {price}</h2>
      <Line options={options} data={datavisulise} />;
       
    </div>
  )
}

export default App
