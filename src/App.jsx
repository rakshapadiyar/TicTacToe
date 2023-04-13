import './style.scss';
import { useState } from 'react';
import Board from './components/Board';

function App() {
  return (
    <div className="app">
      <Board />
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
