import React from 'react';

//randomHex();

export default function SideBar(props) {
  return (
    <div className="SideBar" style={{ backgroundColor: 'black' }}>
      <button
        className="CreateRandomColorBtn"
        onClick={() => {
          props.setRandom(props.randomHex());
        }}
      >
        Generate random color hex code
      </button>
      <p className="hexcodeis"> The hexcode is: {props.random} </p>

      <button
        className="StartSquareBtn"
        onClick={() =>
          props.setBtnMode(props.btnMode === 'Start' ? 'Stop' : 'Start')
        }
      >
        {props.btnMode}
      </button>
    </div>
  );
}
