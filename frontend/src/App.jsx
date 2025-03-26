import {HashRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';
import Navbar from './components/Navbar';
import './App.css'

//Trying to aim for https://forums.pcgamer.com/trending/threads.1/ style

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<ForumPage/>} />
      </Routes>
    </HashRouter>
  )
}

export default App

