
import * as React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, btnText }) => {
  return <button onClick={handleClick}>{btnText}</button>
}

const HighestVotes = ({ anecdoteArray }) => {

  const [votecountArray, setVoteCountArray] = React.useState([]);
  const [highestVoteAnecdote, sethighestVoteAnecdote] = React.useState();

  React.useEffect(() => {
    // on every change of anecdoteArray update votecountarray to count 
    setVoteCountArray(anecdoteArray.map(anecdote => anecdote.voteCount));
    renderAnecdoteWithMostVotes();
  }, [anecdoteArray])
  
  
  const findHighestVoteCountReducer = (prev, current) => prev < current ? current : prev;
  const findBiggestValue = votecountArray && votecountArray.reduce(findHighestVoteCountReducer, 0);
  
  const renderAnecdoteWithMostVotes = () => {
    let highestVoteIndex = votecountArray.indexOf(findBiggestValue);
    sethighestVoteAnecdote(anecdoteArray[highestVoteIndex]);
  }
  
  return (
    <>
      {highestVoteAnecdote && highestVoteAnecdote.value}
    </>
  )

}

const App = () => {

  /* "Api response" */
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [randomAnec, setRandomAnec] = React.useState('');
  const [state, setState] = React.useState([]);
  const [currentRandomValue, setCurrentRandomValue] = React.useState();

  React.useEffect(() => {
    // set "api response" into state
    initializeAnecdotesForState();
  }, [])

  // Modify 'api response' into an array of objects and place them in state
  const initializeAnecdotesForState = () => {
    let temp = [];
    anecdotes.forEach(item => {
      temp.push({ value : item, voteCount : 0})
    })
    setState(temp) ;
  } 
    
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // set current random numeber in scope so it can be pointed on elsewhere
  const handleRandomAnecdoteClick = (randomNumber) => {
    let scopedRandomNumber = getRandomInt(anecdotes.length);
    // update state with the generated random number
    setCurrentRandomValue(scopedRandomNumber);
    getRandomAnecdote(scopedRandomNumber);
  }

  const getRandomAnecdote = (randomNumber) => {
    if (state[randomNumber].value) {
      setRandomAnec(state[randomNumber].value);
    }
  }

  const voteCurrentAnecdote = (currentAnecdote) => {
    
    // Increase current anecdote's votecount by 1 
    let updateCurrentAnecdoteObject = { value: currentAnecdote.value, voteCount: currentAnecdote.voteCount +1 }
    
    // Add the updated object if there is a match, otherwise add everything else  
    setState(state.map(item => {
      return item.value === currentAnecdote.value ? 
        updateCurrentAnecdoteObject : 
        { value: item.value, voteCount: item.voteCount }
      }));
    }
    
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Button handleClick={handleRandomAnecdoteClick} btnText='next anecdote' />
      {state[currentRandomValue] && (
        <Button handleClick={() => voteCurrentAnecdote(state[currentRandomValue])} btnText='vote' />
      )}
      <section style={{marginTop: '10px'}}>
        {randomAnec}
        <br />
        {state[currentRandomValue] ? (
          <>
            <p>Has {state[currentRandomValue].voteCount} votes</p>
          </>
        ) : null}
      </section>
      <section>
        <h1>Anecdote with most votes</h1>
        <HighestVotes anecdoteArray={state} currentIndex={currentRandomValue} />
      </section>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
