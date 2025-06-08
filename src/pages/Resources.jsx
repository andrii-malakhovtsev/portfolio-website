import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/projects.css'
import '../styles/resources.css'

export default function Resources() {
  return (
    <>
      <nav class="navbar">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/education/sinclair" className="nav-button">Education</Link>
        <Link to="/resources" className="nav-button active">Resources</Link>
      </nav>

      <main class="container">
        <section class="projects resources">
          <div class="project resource">
            <a href="../assets/andrii-malakhovtsev-resume.pdf" target="_blank">Resume (PDF)</a>
          </div>

          <div class="project resource">
            <details>
              <summary><strong>Sinclair College Transcript (GPA: 3.63)</strong></summary>
              <a href="../assets/sinclair-transcript.pdf" target="_blank">Transcript (PDF)</a>
              <hr />
              <p><strong>Programming & Software Development</strong></p>
              <ul>
                <li>Java Software Development I & II (<span class="grade-a">A</span>, <span class="grade-b">B</span>)</li>
                <li>C++ Software Development (<span class="grade-b">B</span>)</li>
                <li>ASP.NET with C# (<span class="grade-a">A</span>)</li>
                <li>Data Structures & Algorithms (<span class="grade-b">B</span>)</li>
                <li>Web Dev (HTML & CSS) (<span class="grade-a">A</span>)</li>
              </ul>
              <p><strong>Systems & Tools</strong></p>
              <ul>
                <li>Intro to Operating Systems (<span class="grade-a">A</span>)</li>
                <li>Linux Operating System (in progress)</li>
                <li>Information Systems Analysis & Design (<span class="grade-a">A</span>)</li>
                <li>Database Management (<span class="grade-a">A</span>)</li>
                <li>Network Fundamentals (<span class="grade-b">B</span>)</li>
              </ul>
              <p><strong>Other Strong Courses</strong></p>
              <ul>
                <li>Management & Organizational Behavior (<span class="grade-a">A</span>)</li>
                <li>Humanity & Technology (<span class="grade-a">A</span>)</li>
                <li>Communication & Composition (<span class="grade-a">A</span>, <span class="grade-b">B</span>)</li>
              </ul>
            </details>
          </div>

          <div class="project resource">
            <details>
              <summary><strong>Odesa National University Transcript (GPA: 3.54)</strong></summary>
              <a href="../assets/onu-transcript.pdf" target="_blank">Transcript (PDF)</a>
              <hr />
              <p><strong>Programming & Software Development:</strong></p>
              <ul>
                <li>Object-Oriented Programming – 97 (<span class="grade-a">A</span>)</li>
                <li>Coursework on Object-Oriented Programming – 100 (<span class="grade-a">A</span>)</li>
                <li>System Programming – 80 (<span class="grade-c">C</span>)</li>
                <li>Coursework on System Programming – 85 (<span class="grade-b">B</span>)</li>
                <li>Web Technology and Web Design – 96 (<span class="grade-a">A</span>)</li>
                <li>Coursework on Web Technology and Web Design – 97 (<span class="grade-a">A</span>)</li>
                <li>Data Structures and Algorithms – 90 (<span class="grade-a">A</span>)</li>
              </ul>
              <p><strong>Systems, Architecture, & Electrical Engineering:</strong></p>
              <ul>
                <li>Coursework on Operating Systems and Environments – 90 (<span class="grade-a">A</span>)</li>
                <li>Computer Circuit Design – 90 (<span class="grade-a">A</span>)</li>
                <li>Electronics and Electrical Engineering – 75 (<span class="grade-c">C</span>)</li>
              </ul>
              <p><strong>Math & Algorithms:</strong></p>
              <ul>
                <li>Algebra and Geometry – 80 (<span class="grade-c">C</span>)</li>
                <li>Differential Equations – 75 (<span class="grade-c">C</span>)</li>
                <li>Discrete Mathematics – 70 (<span class="grade-d">D</span>)</li>
                <li>Theory of Probability and Mathematical Statistics – 89 (<span class="grade-b">B</span>)</li>
              </ul>
            </details>
          </div>
        </section>
      </main>
    </>
  )
}
