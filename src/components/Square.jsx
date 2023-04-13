const Square = ({ value, onClick }) => {
  //value is a prop
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
