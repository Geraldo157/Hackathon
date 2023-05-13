// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
// To get the root element from the HTML document

// JSX element, header
const author = {
  firstName: 'Geraldo',
  lastName: 'Jr',
  }
      const date = 'May 5, 2023'

      // JSX element, header
      const Header = (props) => {
        console.log(props)
        return (
          <header>
            <div className='header-wrapper'>
              <h1>{props.welcome}</h1>
              <h2>{props.title}</h2>
              <h3>{props.subtitle}</h3>
              <p>
                {props.firstName} {props.lastName}
              </p>
              <small>{props.date}</small>
            </div>
          </header>
        )
      }

      const numOne = 3
      const numTwo = 2

      const result = (
        <p>
          {numOne} + {numTwo} = {numOne + numTwo}
        </p>
      )

      const yearBorn = 2003
      const currentYear = 2023
      const age = currentYear - yearBorn
      const personAge = (
        <p>
          {' '}
          {author.firstName} {author.lastName} is {age} years old
        </p>
      )

      // JSX element, main
      const techs = ['HTML', 'CSS', 'JavaScript']
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

      // JSX element, main
      const Main= (props) => {
        console.log(props)
        return (
        <main>
          <div className='main-wrapper'>
            <p>
              Prerequisite to get started{' '}
              <strong>
                <em>react.js</em>
              </strong>
              :
            </p>
            <ul>{techsFormatted}</ul>
            {result}
            {personAge}
          </div>
        </main>
        )
        }

      const copyRight = 'Copyright 2020'

      // JSX element, footer
      const footer = (
        <footer>
          <div className='footer-wrapper'>
            <p>{copyRight}</p>
          </div>
        </footer>
      )
      const buttons = (
        <div className='buttons'>
            <a className="btn">HTML</a>
            <a className="btn">CSS</a>
            <a className="btn">JavaScript</a>
            <a className="btn">React</a>
            <a className="btn">Python</a>
            <a className="btn">Django</a>
            <a className="btn">Tailwind</a>
            <a className="btn">PHP</a>
            <a className="btn">Bootstrap</a>
        </div>
      )

// JSX element, app
const app = (
  <div className='app'>
    <Header
    welcome = 'Learning React to the Hackathon'
    title = 'Getting Started React'
    subtitle = 'JavaScript Library'
    />
    <Main/>
    {buttons}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
