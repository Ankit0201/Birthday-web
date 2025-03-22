import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import Memory from './components/Memory/Memory'
import Cake from './components/Cake/Cake'
import Gift from './components/Gift/Gift'
import { useState, useRef } from 'react'


function App() {
  const audioRef = useRef(null);

  const playMusic = (url = null) => {    
    if (url) {
      audioRef.current.src = url; // Set the new audio source
      audioRef.current.loop = true; // Set the audio to loop
      audioRef.current.currentTime = 0;
      audioRef.current.play(); // Play the new audio directly
    }else{
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
  }

  return (
    <>
      <audio ref={audioRef} />
      <Routes>
        <Route path="/" element={<Landing playMusic={playMusic}/>} />
        <Route path="/memory" element={<Memory playMusic={playMusic}/>} />
        <Route path="/cake" element={<Cake playMusic={playMusic}/>} />
        <Route path="/gift" element={<Gift playMusic={playMusic}/>} />
      </Routes>
    </>
  )
}

export default App 