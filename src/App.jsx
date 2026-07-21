import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './file'
import React, { StrictMode,} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Common/Header/Header.jsx'
import Bottom from './Common/Bottom/Bottom.jsx'

import MainPage from './MainPage/MainPage.jsx'
import OurComprehensive from './OurComprehensive/OurComprehensive.jsx'
import ProjectPage from './ProjectPage/ProjectPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path='/' index element = {<MainPage/>}/>
                <Route path='MainPage' element={<MainPage/>}/>
                <Route path='OurComprehensive' element={<OurComprehensive/>}/>
                <Route path='ProjectPage' element={<ProjectPage/>}/>
            </Routes>  
          <Bottom />
        </BrowserRouter>
    </StrictMode>,
    </>
  )
}

export default App
