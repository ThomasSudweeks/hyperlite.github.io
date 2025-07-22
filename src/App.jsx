import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Vite from './pages/Vite/Vite'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vite" element={<Vite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App