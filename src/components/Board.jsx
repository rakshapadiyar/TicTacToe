import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //players are set as set, coz they keep changing and its a simple boolean value
  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition]) return; // if sqaures[cPosition] === true, then it means that there is a value in that box already, so just return,
    // if we dont write this, a player will able able to overwrite previous value in that cell

    //'position' is the position we clicked on

    setSquares(currentSquares => {
      //currentSquares[position] = x; tHIS IS NOT POSSIBLE IN rEACT
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
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
