import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Education from './pages/Education'
import Resources from './pages/Resources'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="app-container">
    <BrowserRouter>
    <ScrollToTop />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
