import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/school/school-common.css'
import '../../styles/school/school-onu.css'
import '../../styles/github-icons.css'
import SchoolsNav from '../../components/SchoolNav'
import MainNavbar from '../../components/MainNavbar'

export default function ONU() {
  return (
    <>
      <MainNavbar />
      <SchoolsNav />
      <main class="container">
        <section class="intro">
          <h2>
            <img src="../../images/logos/onu-logo.jpeg" alt="ONU Logo" width="30" height="30"></img>
            &nbsp;<a href="https://onu.edu.ua/en/">
              Odesa National University</a>
            &nbsp;(2020-2022)
          </h2>
          <p>
            Odesa National University is one of the top ranked Universities in Ukraine.

            Here I've learned such concepts as Discrete Math, Algorithmization, 
            Cryptography, Data Structures, Statistics and other...
          </p>
        </section>

        <section class="classes onu-classes">
          <h2>Programming Coursework</h2>
        
          <div class="class">
            <h3>Mechanism Kinematics</h3>
            <p>Mechanical wheels pulling weights on Windows Forms with MVP-pattern.</p>
            <p><strong>Technologies:</strong> C#, WinForms</p>
            <a href="https://github.com/andrii-malakhovtsev/mechanism-kinematics-winforms" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
          </div>

          <div class="class">
            <h3>Numerical Analysis Methods Library</h3>
            <p>Library for numerical analysis, designed to help solve a variety of mathematical and computational problems.</p>
            <p><strong>Technologies:</strong> C#, WinForms</p>
            <a href="https://github.com/andrii-malakhovtsev/numerical-methods-library" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
          </div>

          <div class="class">
            <h3>Local client-server for Linux</h3>
            <p>Coursework on System Programming. Compact concept of "client-server" app using UNIX shell variables and daemon app.</p>
            <p><strong>Technologies:</strong> C, Shell</p>
            <a href="https://github.com/andrii-malakhovtsev/local-client-server-linux" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
          </div>

          <div class="class">
            <h3>"Sea Battle" game on Windows Forms</h3>
            <p>Coursework on the Object-Oriented Programming.</p>
            <p><strong>Technologies:</strong> C#, WinForms</p>
            <a href="https://github.com/andrii-malakhovtsev/sea-battle-game-winforms" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
          </div>

          <div class="class">
            <h3>Web Technology and Web Design</h3>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
          </div>
        </section>    
      </main>
    </>
  )
}
