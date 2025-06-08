import React, { useState } from 'react';
import GameBoard from './GameBoard';
import './App.css';

function App() {
  const [gameKey, setGameKey] = useState(0); // For restarting the game
  const [moves, setMoves] = useState(0);

  const handleRestart = () => {
    setGameKey((prev) => prev + 1); // Reset game by changing key
    setMoves(0);
  };

  return (
    <div className="app">
      <h1>Memory Match Card Game</h1>
      <p>Moves: {moves}</p>
      <button onClick={handleRestart}>Restart Game</button>
      <GameBoard key={gameKey} setMoves={setMoves} />
    </div>
  );
}

export default App;
