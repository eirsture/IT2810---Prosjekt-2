import React from 'react';
import './App.css';
import ButtonRow from './components/ButtonRow'
import Display from './components/Display'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2>
          header
        </h2>
      </header>
      <div className="sidebar">
        <h2>sidebar</h2>
      </div>
      <div className="content">
        <Display />
        
        <ButtonRow/>
      </div>
      <div className="footer">
        <h4>Footer</h4>
      </div>
    </div>
  );
}

export default App;
