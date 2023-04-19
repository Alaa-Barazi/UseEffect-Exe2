import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color,setColor]=useState('');
 const [count,setCount]=useState(0);
 const [border,setBorder]=useState('0%');
  function changeColors(){
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    useEffect(() => {
      setTimeout(()=>
    {
     setColor(randomColor);
     setCount(prev=>prev+1);
    },500)
    if(count==5){
        setBorder("50%")
    }
  },[color])

}
  return (
    
    <div className="App">
      {changeColors()}
      <div style={{background:color,width:'150px',height:'150px',borderRadius:border}}>
 </div>
    </div>
  )
}

export default App
