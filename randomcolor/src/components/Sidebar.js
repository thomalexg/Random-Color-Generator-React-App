import React from 'react';

//randomHex();

export default function SideBar(props) {
  const startStop = () => {
    if (props.btnMode === 'Start') {
      props.setBtnMode('Stop');
      // props.changePosition();
    } else {
      props.setBtnMode('Start');
      // clearInterval(props.changePosition());
    }
  };
  return (
    <div className="SideBar" style={{ backgroundColor: 'black' }}>
      <button
        className="CreateRandomColorBtn"
        onClick={() => {
          props.setRandom(props.randomColor());
        }}
      >
        Generate random color hex code
      </button>
      <p className="hexcodeis"> The hexcode is: {props.random} </p>

      <button
        className="StartSquareBtn"
        onClick={() => {
          startStop();
          // props.setBtnMode(props.btnMode === 'Start' ? 'Stop' : 'Start');
          // props.changePosition();
        }}
      >
        {props.btnMode}
      </button>
    </div>
  );
}
