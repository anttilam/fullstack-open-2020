import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import Useravatar from './components/user/Useravatar';
import Username from './components/user/Username';

import axios from 'axios';


const App = () => {

  const [randomUserDataJson, setrandomUserDataJson] = React.useState();
  const [randomUserDataResults, setRandomUserDataResults] = React.useState([]);
  const [pageNumCounter, setPageNumCounter] = React.useState(1);
  const [state, setState] = React.useState();
  const [apiError, setApiError] = React.useState();

  useEffect(() => {
    // käyttämään pelkkää yhtä funktiota
    fetchRandomUserData();
    /*fetchRandomUserData().then((randomUserData => {
      setrandomUserDataJson(JSON.stringify(randomUserData, null, 2) || 'No user found');
      setRandomUserDataResults(randomUserData && randomUserData.data && randomUserData.data.results);
    }));*/

    // Return function --> do this when component unmounts
    // Used for example unsubscribing
    return () => {
      console.log('component unMount --> clean up lol')  
    }
  }, []);

  const fetchRandomUserData = () => {
    return axios.get(`https://randomuser.me/api?page=${pageNumCounter}`)
      .then(response => {
        console.log("what ", response.data.results);
        setRandomUserDataResults([...randomUserDataResults, ...response.data.results]);
        //setRandomUserDataResults(randomUserDataResults.concat(response.data.results));
        setPageNumCounter(response.data.info.page + 1);
        console.log('pageNumCounter', pageNumCounter);
      }).catch(error => {
        // Palauta tyhjää
        console.log('error kävi promisessa')
      })
  }

  
  console.log("apiError ", apiError);
  
  // console.log('randomUserDataResults ', randomUserDataResults || null);
  return (
    <>
      {randomUserDataResults && randomUserDataResults.map(user => 
        <>
          <Username name={user.name} />
          {' '}
          <Useravatar picture={user.picture} />
        </>
      )}
      <button onClick={fetchRandomUserData}>Click for more</button>
      
      <pre style={{fontSize: '11px'}}>
        {randomUserDataJson}
      </pre>
    </>
  )
}

export default App;