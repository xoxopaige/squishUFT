import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'

import HomePage from "./views/homepage.jsx"
import LandingPage from "./views/landingpage.jsx"
function App() {

  return (
    //---------------------------
    //      ROUTING
    //---------------------------
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>

  )
}

export default App
