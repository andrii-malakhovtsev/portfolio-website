import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/school/school-common.css'
import '../../styles/github-icons.css'
import SchoolsNav from '../../components/SchoolNav'
import MainNavbar from '../../components/MainNavbar'

export default function Sinclair() {
  return (
    <>
      <MainNavbar />
      <SchoolsNav />
      <main class="container">
        <section class="intro">
          <h2>
            <img src="../../images/logos/sinclair-logo.png" alt="Sinclair College Logo" width="30" height="30"></img>
            &nbsp;<a href="https://sinclair.edu/about/">
            Sinclair College</a>
            &nbsp;(2023-2025)
          </h2>
          <p>
            Sinclair is one of the top community college in the nation and is home to 30,000 student who are supported by award-wining faculty and staff.
          </p>
        </section>

        <section class="classes">
          <h2>Programming Coursework</h2>
        
          <div class="class">
            <h3>CIS 2222 – ASP.NET with C#</h3>
            <p>Introduces server side web programming to develop web applications based on ASP.NET.</p>
            <p><strong>Technologies:</strong> C#, ASP.NET Core</p>
            <a href="https://github.com/andrii-malakhovtsev/quarterly-sales" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
          </div>

          <div class="class">
            <h3>CIS 2207 – Data Structures & Algorithms</h3>
            <p>Covers data abstraction, encapsulation, recursion, and manipulation of data structures like lists, queues, trees, heaps, and graphs using C++ programming.</p>
            <p><strong>Technologies:</strong> C++</p>
            <a href="https://github.com/andrii-malakhovtsev/cis-2207" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
          </div>

          <div class="class">
            <h3>CIS 2165 – Database Management</h3>
            <p>Design and develop a simple database and implement a portion of this application including forms, queries and reports. Emphasis on database design techniques, normalization and the SQL database language.</p>
            <p><strong>Technologies:</strong> SQL, MS Access</p>
          </div>
        
          <div class="class">
            <h3>CIS 2217 – Java Software Development II</h3>
            <p>Focuses on abstract classes, interfaces, binary I/O, recursion, and implementing data structures such as lists, stacks, queues, and priority queues.</p>
            <p><strong>Technologies:</strong> Java</p>
            <a href="https://github.com/andrii-malakhovtsev/cis-2217" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        
          <div class="class">
            <h3>CIS 1202 – C++ Software Development</h3>
            <p>Introduces arrays, searching and sorting algorithms, pointers, structures, file operations, classes, inheritance, polymorphism, and virtual functions in C++.</p>
            <p><strong>Technologies:</strong> C++</p>
            <a href="https://github.com/andrii-malakhovtsev/cis-1202" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        
          <div class="class">
            <h3>CIS 2212 – Java Software Development I</h3>
            <p>Covers object-oriented programming concepts, Java syntax, data types, control structures, file processing, GUI applications, arrays, and ArrayList class.</p>
            <p><strong>Technologies:</strong> Java</p>
            <a href="https://github.com/andrii-malakhovtsev/cis-2212" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        
          <div class="class">
            <h3>CIS 1350 – Web Site Development with HTML & CSS</h3>
            <p>Teaches creation of websites using HTML and CSS, emphasizing current web standards, validation tools, and cross-browser compatibility.</p>
            <p><strong>Technologies:</strong> HTML, CSS</p>
            <a href="https://github.com/andrii-malakhovtsev/cis-1350-final-project" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        
          <div class="class">
            <h3>CIS 1111 – Introduction to Problem Solving & Computer Programming</h3>
            <p>Introduces problem-solving techniques using flowcharts and pseudocode, and programming fundamentals in C++ including sequence, selection, iteration, functions, and arrays.</p>
            <p><strong>Technologies:</strong> C++</p>
          </div>
        </section>    
      </main>
    </>
  )
}
