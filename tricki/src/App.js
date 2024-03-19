import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board/Board.js';
import Square from './components/Square/Square.js';


const App = () => {
  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });
  const checkForWinner = squares => {
    setTurn(Turn=== 'X'? 'O' : 'X');
  }
  const handleClick = Square => {
    let newSquares= [...squares]
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  }
  return (
    <div className="container">
      <Board squares={squares}/>
    </div>
  );
}

export default App;
