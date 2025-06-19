import React, { useEffect, useState } from 'react';

export default function SchoolsNav() {
  const [activeIds, setActiveIds] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['onu', 'sinclair', 'wrightstate'];
      const visibleIds = [];

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const offset = window.innerHeight * 0.1;

        if (rect.top <= window.innerHeight && rect.bottom >= offset) {
          visibleIds.push(id);
        }
      });

      setActiveIds(visibleIds);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className="navbar schools-nav">
      <a
        href="#onu"
        className={`nav-button${activeIds.includes('onu') ? ' active' : ''}`}
        id="onu-link"
      >
        ONU
      </a>
      <a
        href="#sinclair"
        className={`nav-button${activeIds.includes('sinclair') ? ' active' : ''}`}
        id="sinclair-link"
      >
        Sinclair
      </a>
      <a
        href="#wrightstate"
        className={`nav-button${activeIds.includes('wrightstate') ? ' active' : ''}`}
        id="wsu-link"
      >
        WSU
      </a>
    </nav>
  );
}
