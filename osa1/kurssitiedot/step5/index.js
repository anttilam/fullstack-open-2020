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

const Part = ({part, exe}) => {
    return (
        <p>{part} {exe}</p>
    )
}

const Content = (props) => {
  const { partExerciseArray } = props;
  
  return (
    <>
      {partExerciseArray.map(item => <Part part={item.name} exe={item.exercises} />)}
    </>
  ) 
}

const Total = props => {
  const { totalExercises } = props;
  
  let totalEx = 0;

  const calculateExercises = totalExercises.forEach(item => {
    return totalEx += item.exercises;
  })
  
  return <p>Number of exercises {totalEx}</p>
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
return (
  <div>
    <Header course={course.name} />
    <Content partExerciseArray={course.parts} />
    <Total totalExercises={course.parts} />      
   </div>
)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
