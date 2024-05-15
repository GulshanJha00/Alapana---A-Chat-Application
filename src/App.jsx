import React from 'react'
import socketIO from 'socket.io-client'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const ENDPOINT = 'http://localhost:3000/'
const socket = socketIO(ENDPOINT, {transports: ['websocket']});


const App = () => {

  socket.on("connect",()=>{
     
  })




  return (
    <>
    <div className="App">
      <h1>Working</h1>
    </div>
      
    </>
  )
}

export default App
