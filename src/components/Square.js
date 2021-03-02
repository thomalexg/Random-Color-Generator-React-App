import React from 'react';

export default function Square(props) {
  const squarePosition = {
    marginLeft: props.squarePositionX,
    marginTop: props.squarePositionY,
  };
  return <div className="Square" style={squarePosition} />;
}
