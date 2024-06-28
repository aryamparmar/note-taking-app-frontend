import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import InitialPage from './pages/InitialPage.jsx'
import NoteRendering from './pages/NoteRendering.jsx'
import UserProfile from './pages/UserProfile.jsx'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <>
      <BrowserRouter>
          <ToastContainer></ToastContainer>
        <Routes>
          <Route path='/' element={<InitialPage/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/note' element={<NoteRendering/>}></Route>
          <Route path='/user' element={<UserProfile/>}></Route>
          <Route path='/*' element={<InitialPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
