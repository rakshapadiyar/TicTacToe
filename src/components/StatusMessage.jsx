// to display draw message
const StatusMessage = ({ winner, isXNext, squares }) => {
  //boolean that indicates we have/ not a free cell in the board,
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  // if "every" cell is  not null (means if every cell has value, then it returns true)
  const nextPlayer = isXNext ? ' X' : ' O'; //this is a " derived / computed state.", so we did not create another useState for nextPlayer

  //const statusMessage = winner ? `Winner is ${winner}` : nextPlayer;

  const renderStatusMessage = () => {
    if (winner)
      return (
        <React.Fragment>
          {/* //instead of using divs <div></div>, we can use React.Fragment */}
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </React.Fragment>
      );
    if (!winner && noMovesLeft) {
      return (
        <React.Fragment>
          <span className="text-orange">X</span> and{' '}
          <span className="text-green">O</span> Tied!
        </React.Fragment>
      );
    }
    if (!winner && !noMovesLeft)
      return (
        <React.Fragment>
          Next Player is
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </React.Fragment>
      );
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
