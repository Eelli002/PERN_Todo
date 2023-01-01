import './App.css';
import React, { Fragment } from "react";

// Components
import InputTodo from './components/inputTodo';

function App() {
  return (
    <Fragment>
      <div className='Container'>
        <InputTodo/>
      </div>
    </Fragment>
  );
}

export default App;