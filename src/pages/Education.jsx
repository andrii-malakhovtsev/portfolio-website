import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/school/school-common.css'
import '../styles/school/school-onu.css'
import SchoolsNav from '../components/SchoolNav'
import MainNavbar from '../components/MainNavbar'

export default function Education() {
  return (
    <>
      <MainNavbar />
      <SchoolsNav />
        <main className="container">
            <section id="onu">
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

                <section className="classes onu-classes">
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
                    <h3>Summer credited practice on SQL-database</h3>
                    <p><strong>Technologies:</strong> PostgreSQL</p>
                </div>

                <div class="class">
                    <h3>Web Technology and Web Design</h3>
                    <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
                </div>  
                </section> 
            </section>
            <section id="sinclair">
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
            <section class="classes" id="sinclair">
            <h2>Programming Coursework</h2>
            
            <div class="class">
                <h3>ASP.NET with C#</h3>
                <p>Introduces server side web programming to develop web applications based on ASP.NET.</p>
                <p><strong>Technologies:</strong> C#, ASP.NET Core</p>
                <p><strong>Course:</strong> <a href="https://www.sinclair.edu/course/params/subject/CIS/courseNo/2222/" class="doc-icon" target="_blank">CIS 2222</a></p>
                <a href="https://github.com/andrii-malakhovtsev/quarterly-sales" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
            </div>

            <div class="class">
                <h3>Data Structures & Algorithms</h3>
                <p>Covers data abstraction, encapsulation, recursion, and manipulation of data structures like lists, queues, trees, heaps, and graphs using C++ programming.</p>
                <p><strong>Technologies:</strong> C++</p>
                            <p><strong>Course:</strong> <a href="https://www.sinclair.edu/course/params/subject/CIS/courseNo/2207/" class="doc-icon" target="_blank">CIS 2207</a></p>
                <a href="https://github.com/andrii-malakhovtsev/cis-2207" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
            </div>

            <div class="class">
                <h3>Database Management</h3>
                <p>Design and develop a simple database and implement a portion of this application including forms, queries and reports. Emphasis on database design techniques, normalization and the SQL database language.</p>
                <p><strong>Technologies:</strong> SQL, MS Access</p>
                <p><strong>Course:</strong> <a href="https://www.sinclair.edu/course/params/subject/CIS/courseNo/2165/" class="doc-icon" target="_blank">CIS 2165</a></p>
            </div>
            
            <div class="class">
                <h3>Java Software Development II</h3>
                <p>Focuses on abstract classes, interfaces, binary I/O, recursion, and implementing data structures such as lists, stacks, queues, and priority queues.</p>
                <p><strong>Technologies:</strong> Java</p>
                <p><strong>Course:</strong> <a href="https://www.sinclair.edu/course/params/subject/CIS/courseNo/2217/" class="doc-icon" target="_blank">CIS 2217</a></p>
                <a href="https://github.com/andrii-malakhovtsev/cis-2217" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            
            <div class="class">
                <h3>C++ Software Development</h3>
                <p>Introduces arrays, searching and sorting algorithms, pointers, structures, file operations, classes, inheritance, polymorphism, and virtual functions in C++.</p>
                <p><strong>Technologies:</strong> C++</p>
                <p><strong>Course:</strong> <a href="https://www.sinclair.edu/course/params/subject/CIS/courseNo/1202/" class="doc-icon" target="_blank">CIS 1202</a></p>
                <a href="https://github.com/andrii-malakhovtsev/cis-1202" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            
            <div class="class">
                <h3>Java Software Development I</h3>
                <p>Covers object-oriented programming concepts, Java syntax, data types, control structures, file processing, GUI applications, arrays, and ArrayList class.</p>
                <p><strong>Technologies:</strong> Java</p>
                <p><strong>Course:</strong> <a href="https://www.sinclair.edu/course/params/subject/CIS/courseNo/2212/" class="doc-icon" target="_blank">CIS 2212</a></p>
                <a href="https://github.com/andrii-malakhovtsev/cis-2212" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            
            <div class="class">
                <h3>Web Site Development with HTML & CSS</h3>
                <p>Teaches creation of websites using HTML and CSS, emphasizing current web standards, validation tools, and cross-browser compatibility.</p>
                <p><strong>Technologies:</strong> HTML, CSS</p>
                <p><strong>Course:</strong> <a href="https://www.sinclair.edu/course/params/subject/CIS/courseNo/1350/" class="doc-icon" target="_blank">CIS 1350</a></p>
                <a href="https://github.com/andrii-malakhovtsev/cis-1350-final-project" class="github-icon" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            
            <div class="class">
                <h3>Introduction to Problem Solving & Computer Programming</h3>
                <p>Introduces problem-solving techniques using flowcharts and pseudocode, and programming fundamentals in C++ including sequence, selection, iteration, functions, and arrays.</p>
                <p><strong>Technologies:</strong> C++</p>
                <p><strong>Course:</strong> <a href="https://www.sinclair.edu/course/params/subject/CIS/courseNo/1111/" class="doc-icon" target="_blank">CIS 1111</a></p>
            </div>
            </section>
            </section>
            <section class="intro" id="wrightstate">
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
