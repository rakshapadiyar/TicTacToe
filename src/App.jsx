import './style.scss';
import { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './Winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //players are set as set, coz they keep changing and its a simple boolean value
  const [isXNext, setIsXNext] = useState(false);

  const nextPlayer = isXNext ? `Next Player is X` : `Next Player is O`; //this is a " derived / computed state.", so we did not create another useState for nextPlayer
  // It is a value derived from latest state
  const winner = calculateWinner(squares);
  //console.log('Winner is ', winner);
  const statusMessage = winner ? `Winner is ${winner}` : nextPlayer;
  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) return; // if sqaures[cPosition] === true, then it means that there is a value in that box already, so just return,
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

  return (
    <div className="app">
      <h2> {statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}
// function App() {
//   let counter = 1;

//   // function func() {
//   //   counter = counter + 1;
//   //   console.log('I am clicked');
//   // }
//   return (
//     <div className="app">
//       <button>Click me</button>
//       <h1>${counter}</h1>
//     </div>
//   );
// }
// export default App;

//   // now in output it wont increment counter on the screen.
//   //coz counter is not a state.
//   // state always triggers component to re render and components will be updated.
// }

// function App() {
//   const [counter, setCounter] = useState(100);
//   console.log('hello');
//   const func = () => {
//     setCounter(counter => {
//       return counter + 1;
//     });
//   };

//   return (
//     <div className="app">
//       <button onClick={func}>Click me</button>
//       <h1>${counter}</h1>
//     </div>
//   );
// }
export default App;

// now in output it wont increment counter on the screen.
// coz counter is not a state.
// state always triggers component to re render and components will be updated.
