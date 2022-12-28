import React from 'react';
import logo from './logo.svg';
import './App.css';
import ControlPanel from './components/ControlPanel';
import GameArea from './components/GameArea';
import AppContextProvider from './components/AppContextProvider';

function App() {
  return (
    <div className="App">
      <main>
        <AppContextProvider>
          <ControlPanel/>
          <GameArea/>
        </AppContextProvider>
        
      </main>
      <footer>
        2022 © SwunOo <a href='github.com/swunoo/ConwayGameOfLife-Renderer'>view code</a>
      </footer>
    </div>
  );
}

export default App;
