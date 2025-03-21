import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import Memory from './components/Memory/Memory'
import Cake from './components/Cake/Cake'
import Gift from './components/Gift/Gift'
import { useState } from 'react'


function App() {
  const [audio, setAudio] = useState(null);

  const playMusic = (audioUrl = null) => {
    if (audio) {
      audio.pause(); // Pause the currently playing audio
      setAudio(null); // Clear the audio state
    }else{
      const newAudio = new Audio(audioUrl);
      newAudio.loop = true; // Set the audio to loop
      setAudio(newAudio);
      newAudio.play(); // Play the new audio directly
    }
  }

  return (
    <>
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