import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/projects.css'
import '../styles/github-icons.css'
import MainNavbar from '../components/MainNavbar'

export default function Home() {
  return (
    <>
      <MainNavbar />
      <main className="container">
        <section className="intro">
          <h2>About Me</h2>
          <p>
            I'm a motivated software development student with a strong passion for building useful applications and solving real-world problems. I enjoy working with both front-end and back-end technologies, and I'm currently looking for an internship to grow my skills in a professional environment.
          </p>
        </section>

        <section className="projects">
          <hr />
          <h2>Projects</h2>
          <hr /><br />

          <div className="project">
            <h3>Quarterly Sales</h3>
            <p>Database-like app to monitor, add, edit and create sales or employees that are making them.</p>
            <p><strong>Technologies:</strong> C#, ASP.NET</p>
            <img src="images/projects/quarterly_sales.png" alt="Quarterly Sales App image" />
            <a href="https://github.com/andrii-malakhovtsev/quarterly-sales" className="github-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="project">
            <h3>Numerical Methods Library</h3>
            <p>A C# library for solving linear equations, root finding, LU decomposition, and more.</p>
            <p><strong>Technologies:</strong> C#, .NET</p>
            <img src="images/projects/function_graphic.png" alt="Function graphic image" />
            <a href="https://github.com/andrii-malakhovtsev/numerical-methods-library" className="github-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="project">
            <h3>Game Query</h3>
            <p>Windows database-like app that helps friends choose multiplayer games they can play together.</p>
            <p><strong>Technologies:</strong> C#, WinForms</p>
            <img src="images/projects/player_list.png" alt="Player List image" />
            <img src="images/projects/games_list.png" alt="Games List image" />
            <a href="https://github.com/andrii-malakhovtsev/game-query-winforms" className="github-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="project">
            <h3>Mechanism Kinematics</h3>
            <p>Windows app that simulates mechanical systems.</p>
            <p><strong>Technologies:</strong> C#, MVP pattern, WinForms, Blazor (in progress)</p>
            <img src="images/projects/mechanism_kinematics.png" alt="Mechanism Kinematics image" />
            <a href="https://github.com/andrii-malakhovtsev/mechanism-kinematics-winforms" className="github-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="project">
            <h3>"Sea Battle" Game</h3>
            <p>Classic "Sea Battle" game with an intelligent enemy AI for Windows.</p>
            <p><strong>Technologies:</strong> C#, WinForms</p>
            <img src="images/projects/sea_battle.png" alt="Sea Battle Game image" />
            <a href="https://github.com/andrii-malakhovtsev/sea-battle-game-winforms" className="github-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="project">
            <h3>Clipboard Image to Text</h3>
            <p>Tool that converts copied screenshots to text using Tesseract OCR.</p>
            <p><strong>Technologies:</strong> Python, Tesseract OCR</p>
            <a href="https://github.com/andrii-malakhovtsev/clipboard-image-to-text" className="github-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="project">
            <h3>Local Client-Server Interaction</h3>
            <p>C-based project demonstrating client-server behavior using UNIX shell variables.</p>
            <p><strong>Technologies:</strong> C, Linux, Shell</p>
            <a href="https://github.com/andrii-malakhovtsev/local-client-server-linux" className="github-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
