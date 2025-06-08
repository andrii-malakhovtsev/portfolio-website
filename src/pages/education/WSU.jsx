import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/school/school-common.css'

export default function WSU() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/education/sinclair" className="nav-button active">Education</Link>
        <Link to="/resources" className="nav-button">Resources</Link>
      </nav>

      <nav className="navbar schools-nav">
        <Link to="/education/onu/" class="nav-button" id="onu-link">ONU</Link>
        <Link to="/education/sinclair/" class="nav-button" id="sinclair-link">Sinclair</Link>
        <Link to="/education/wrightstate/" class="nav-button active" id="wsu-link">WSU</Link>
      </nav>

      <main class="container">
        <section class="intro">
          <h2>
            <img src="../../images/logos/wrightstate-logo.jpg" alt="Wright State University Logo" width="65" height="30"></img>
            &nbsp;<a href="https://www.wright.edu/about">
              Wright State University</a>
            &nbsp;(2025-...)
          </h2>
          <p>
            I am about to start studying at Wright State University this year, wish me luck!
          </p>
        </section>
      </main>
    </>
  )
}
