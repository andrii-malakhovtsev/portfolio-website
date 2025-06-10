import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MainNavbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link
        to="/"
        className={`nav-button${location.pathname === '/' ? ' active' : ''}`}
      >
        Home
      </Link>
      <Link
        to="/education/sinclair"
        className={`nav-button${location.pathname.startsWith('/education') ? ' active' : ''}`}
      >
        Education
      </Link>
      <Link
        to="/resources"
        className={`nav-button${location.pathname === '/resources' ? ' active' : ''}`}
      >
        Resources
      </Link>
    </nav>
  );
}