import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Resources from './pages/Resources';
import ScrollToTop from './components/ScrollToTop';
import { useSwipeable } from 'react-swipeable';
import { useEffect } from 'react';

const NAV_ROUTES = ['/', '/education', '/resources'];

function SwipeWrapper({ children }) {
  
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = NAV_ROUTES.findIndex(route =>
    location.pathname === route ||
    (route === '/education' && location.pathname.startsWith('/education'))
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < NAV_ROUTES.length - 1) {
        navigate(NAV_ROUTES[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        navigate(NAV_ROUTES[currentIndex - 1]);
      }
    },
    trackMouse: true,
    delta: 10,
    preventScrollOnSwipe: true,
    swipeDuration: 300
  });

  return (
    <div {...handlers} style={{ flex: 1, minHeight: '100vh', touchAction: 'pan-y' }}>
      {children}
    </div>
  );
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <SwipeWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </SwipeWrapper>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
