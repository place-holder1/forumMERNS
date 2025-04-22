import {HashRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import NewPage from './pages/NewPage'
import ForumPage from './pages/ForumPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar/Navbar';
import ChatWindow from "./components/ChatWindow/ChatWindow";
import Footer from "./components/Footer/Footer";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
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
          <Route path="/new" element={<NewPage/>} />
          <Route path="/create" element={<ForumPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/posts/:postId" element={<PostPage />} />
          <Route path="/profiles/:userID" element={<ProfilePage />} />
        </Routes>
        <ChatWindow/>
      </main>
      
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

