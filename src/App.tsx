import React from 'react';
import logo from './logo.svg';
import './App.css';
import ControlPanel from './components/ControlPanel';
import GameArea from './components/GameArea';

function App() {
  return (
    <div className="App">
      <main>
        <ControlPanel/>
        <GameArea/>
      </main>
      <footer>
        2022 © SwunOo <a href='github.com/swunoo/ConwayGameOfLife-Renderer'>view code</a>
      </footer>
    </div>
  );
}

export default App;
