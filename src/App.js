import React from 'react';
import './App.css';
import './MemoryCard.css';
import MemoryCard from './components/MemoryCard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          Memory Game
          <p style={{fontSize: "15px", color: "#767676"}}>Match Cards To Win</p>
      </header>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
    </div>
  );
}

export default App;
