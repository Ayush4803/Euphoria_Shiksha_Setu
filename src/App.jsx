import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Donate from './pages/Donate'
import RequestBooks from './pages/RequestBooks'
import GetAssociated from './pages/GetAssociated'
import Contact from './pages/Contact'
import DonateFunds from "./components/DonateFunds";
import About from"./components/About"


export default function App(){
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path='/donate' element={<Donate/>} />
          <Route path='/request-books' element={<RequestBooks/>} />
          <Route path='/get-associated' element={<GetAssociated/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/donate-funds" element={<DonateFunds />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
