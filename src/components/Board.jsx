import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleSquareClick = clickedPosition => {
    //'position' is the position we clicked on

    setSquares(currentSquares => {
      //currentSquares[position] = x; tHIS IS NOT POSSIBLE IN rEACT
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return 'X';
        }

        return squareValue;
      });
    });
    console.log(squares);
  };

  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;

// nothing will be displayed, coz value is null
