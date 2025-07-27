import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App