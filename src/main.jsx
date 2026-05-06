import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ScalingReadiness from './pages/ScalingReadiness.jsx'
import FullstackEmbed from './pages/FullstackEmbed.jsx'
import DevopsOverhaul from './pages/DevopsOverhaul.jsx'
import Why from './pages/Why.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scaling-readiness" element={<ScalingReadiness />} />
        <Route path="/fullstack-embed" element={<FullstackEmbed />} />
        <Route path="/devops-overhaul" element={<DevopsOverhaul />} />
        <Route path="/why" element={<Why />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
