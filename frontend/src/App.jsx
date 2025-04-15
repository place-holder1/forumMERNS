import {HashRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import ChatWindow from "./components/ChatWindow";
import Footer from "./components/Footer";
import './styles/global.css'
import './App.css'

//Trying to aim for https://forums.pcgamer.com/trending/threads.1/ style

function App() {
  return (
    <HashRouter>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<ForumPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </main>
      <ChatWindow/>
      <footer>
        <Footer/>
      </footer>
    </HashRouter>


    // To refresh the page every time:
    // npm run build
    // npm run start
  )
}

export default App

