import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/school/school-common.css'
import SchoolsNav from '../../components/SchoolNav'
import MainNavbar from '../../components/MainNavbar'

export default function WSU() {
  return (
    <>
      <MainNavbar />
      <SchoolsNav />
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
