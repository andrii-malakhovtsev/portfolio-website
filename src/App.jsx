import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ONU from './pages/education/ONU'
import Sinclair from './pages/education/Sinclair'
import WSU from './pages/education/WSU'
import Resources from './pages/Resources'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education/onu" element={<ONU />} />
        <Route path="/education/sinclair" element={<Sinclair />} />
        <Route path="/education/wrightstate" element={<WSU />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
