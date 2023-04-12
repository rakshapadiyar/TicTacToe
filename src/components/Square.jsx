const Square = ({ value }) => { //value is a prop
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};

export default Square;
