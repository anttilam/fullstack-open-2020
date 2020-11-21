import * as React from 'react';
import ReactDOM from 'react-dom';


const Header = ({text}) => {
  return <h1>{text}</h1>
}

const Button = ({handleClick, btnText}) => {
  return (
    <button onClick={handleClick}>{btnText}</button>
  )
}

const FeedBack = ({ handleClick, text}) => {
  return (
    <>
      <Header text={text} />
      <Button handleClick={handleClick('good')} btnText='Good' />
      <Button handleClick={handleClick('neutral')} btnText='Neutral' />
      <Button handleClick={handleClick('bad')} btnText='Bad' />
    </>
  )
}

const StatsLine = ({cellText, cellValue}) => {
  return (
    <>
      <table style={{ tableLayout: 'fixed', width: '150px'}}>
        <tbody>
          <tr>
            <td>{cellText}</td>
            <td>{cellValue}</td>
          </tr>
          </tbody>
      </table>
    </>
  )
}

const Stats = ({votes, voteCount }) => {

  if (!voteCount) {
    return <p>No feedback given</p>;
  }

  const countAverage = (count) => `${Math.round(count / voteCount) * 100)} %`;
  
  return (
    <>
      <Header text={'Statistics'} />
      <StatsLine cellText={'Good'} cellValue={votes.good} />
      <StatsLine cellText={'Neutral'} cellValue={votes.neutral} />
      <StatsLine cellText={'Bad'} cellValue={votes.bad} />
      <StatsLine cellText={'All'} cellValue={voteCount} />
      <StatsLine cellText={'Average'} cellValue={countAverage(votes.neutral)} />
      <StatsLine cellText={'Positive'} cellValue={countAverage(votes.good)} />
      <StatsLine cellText={'Bad'} cellValue={countAverage(votes.bad)} />
    </>
  )
}


const App = () => {
  
  const [votes, setVote] = React.useState({
    good : 0,
    neutral : 0,
    bad: 0,
  });

  const [voteCount, setVoteCount] = React.useState(0);


  const handleClick = (type) => {
    return () => {
      setVote({...votes, [type]: votes[type] + 1})
      setVoteCount(voteCount +1);
    }
  }

  return (
    <div>
      <FeedBack text={'Give feedback'} handleClick={handleClick} />
      <Stats votes={votes} voteCount={voteCount} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
