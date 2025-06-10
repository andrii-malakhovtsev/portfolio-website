import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SchoolsNav() {
  const location = useLocation();

  return (
    <nav className="navbar schools-nav">
      <Link
        to="/education/onu"
        className={`nav-button${location.pathname.includes('/education/onu') ? ' active' : ''}`}
        id="onu-link"
      >
        ONU
      </Link>
      <Link
        to="/education/sinclair"
        className={`nav-button${location.pathname.includes('/education/sinclair') ? ' active' : ''}`}
        id="sinclair-link"
      >
        Sinclair
      </Link>
      <Link
        to="/education/wrightstate"
        className={`nav-button${location.pathname.includes('/education/wrightstate') ? ' active' : ''}`}
        id="wsu-link"
      >
        WSU
      </Link>
    </nav>
  );
}