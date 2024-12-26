
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Project from './pages/Project'
import Header from './components/Header'


function App() {
  

  return (
    <>
    <Header/>
   
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/about'  element={<About/>} />
          <Route path='/dashboard'  element={<Dashboard/>} />
          <Route path='/sign-in'  element={<SignIn/>} />
          <Route path='/sign-up'  element={<SignUp/>} />
          <Route path='/projects'  element={<Project/>} />
          

        </Routes>
    </>
  )
}

export default App
