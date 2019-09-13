import React from 'react';
import './App.css';
import Sidebar from './components/sidebarContent';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2>
          header
        </h2>
      </header>
      <div className="sidebar">
          <Sidebar categories={["Cat", "Dog", "Horse"]} />
      </div>
      <div className="content">
        <div className="svg-section">
          <h2>SVG</h2>
        </div>
        <div className="text-section">
          <h2>Text</h2>
        </div>
        <div className="sound-section">
          <h2>Sound</h2>
        </div>
      </div>
      <div className="footer">
        <h4>Footer</h4>
      </div>
    </div>
  );
}

export default App;
