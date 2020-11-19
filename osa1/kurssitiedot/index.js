import React from 'react';
import ReactDOM from 'react-dom';

function Header (props) {
  const { course } = props;
  return (
    <>
      <header>
        <h1>{course}</h1>
      </header>
    </>
  )
}

const Content = (props) => {
  const { part, exercise } = props;
  return (
    <>
      {part} {exercise}
    </>
  ) 
}

const Total = props => {
  const { totalExercises } = props;
  return <p>Number of exercises {totalExercises}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={exercises1}/>
      <Content part={part2} exercise={exercises2}/>
      <Content part={part3} exercise={exercises3}/>
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
