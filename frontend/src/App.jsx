import {HashRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import './App.css'

//Trying to aim for https://forums.pcgamer.com/trending/threads.1/ style

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/create" element={<CreatePage/>} /> */}
      </Routes>
    </HashRouter>
  )
}

export default App

