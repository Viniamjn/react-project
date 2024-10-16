import React from 'react';
import './App.css';
import Charecter from "./components/charecter/charecter";

function App() {
  return (
    <div>
      <Charecter
          name={'Veronica Ann Bennet'}
          status={'Alive'}
          type={'Gazorpian'}
          gender={'Female'}
          img={'https://rickandmortyapi.com/api/character/avatar/376.jpeg'}>
          <p>Lorem ipsum dolor sit amet.</p>
          </Charecter>
        <Charecter
            name={'Veronica Ann Bennet'}
            status={'Alive'}
            type={'Gazorpian'}
            gender={'Female'}
            img={'https://rickandmortyapi.com/api/character/avatar/376.jpeg'}>
            <p>Lorem ipsum dolor sit amet.</p>
        </Charecter>
    </div>
  );
}

export default App;
