import React from 'react'
import './App.css'
import Header from "./component/Header"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
       <Route exact path ="/Header" element={<Header/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
