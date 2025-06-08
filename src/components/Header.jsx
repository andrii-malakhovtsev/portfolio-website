import React from 'react';

export default function Header() {
  return (
    <header>
        <div className="container">
          <h1>Andrii Malakhovtsev</h1>
          <p>Software Developer | Problem Solver | Lifelong Learner</p>
          <nav>
            <a href="https://github.com/andrii-malakhovtsev" target="_blank" rel="noopener noreferrer">GitHub</a>
            &nbsp;<a href="mailto:andrii.malakhovtsev@gmail.com">Email</a>&nbsp;
            <a href="https://linkedin.com/in/andrii-malakhovtsev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>
        </div>
    </header>
  );
}