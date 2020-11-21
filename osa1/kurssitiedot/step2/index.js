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
      {partExerciseArray.map(item => <Part part={item.part} exe={item.exercises} />)}
    </>
  ) 
}

const Total = props => {
  const { totalExercises } = props;
  return <p>Number of exercises {totalExercises}</p>
}


const App = () => {
  const course = 'Half Stack application development'
  const partExerciseArray = [
      {
        part: 'Fundamentals of React',
        exercises: 10
      },
      {
        part: 'Using props to pass data',
        exercises: 7
      },
      {
        part: 'State of a component',
        exercises: 14
      }
  ];
  
  let totalEx = 0;

  const calculateExercises = partExerciseArray.forEach(item => {
    return totalEx += item.exercises;
  })

console.log(totalEx)
return (
  <div>
    <Header course={course} />
    <Content partExerciseArray={partExerciseArray} />
    <Total totalExercises={totalEx} />      
   </div>
)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
