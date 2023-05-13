import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Numbers = ({numbers}) =>{
  const list = numbers.map((number) => <li>{number}</li>)
  return list;
}

const App = () => {
  let numbers = [1,2,3,4,5,6]
  return (
    <div className='container'>
      <div>
        <ul>
          <Numbers numbers={numbers}/>
        </ul>
      </div>
    </div>
  )
}

const skills = [
  ['HTML', 10],
  ['CSS', 8],
  ['JS', 9],
  ['React', 10],
]

const Skill = ({skill: [tech, level]}) =>{
  return(
    <li>{tech} - {level}</li>
  )
}

const Skills = ({skills}) =>{
  const skillist = skills.map((skill) => <Skill skill={skill}/>)
  console.log(skillist)
  return skillist
}

const composition = (
  <div>
    <h1>Numbers List</h1>
    <App />
    <h1>Skills Levels</h1>
    <Skills skills={skills} />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(composition, rootElement)
