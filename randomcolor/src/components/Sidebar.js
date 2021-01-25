import React from 'react';

//randomHex();

export default function SideBar(props) {
  return (
    <div className="SideBar" style={{ backgroundColor: `${props.random}` }}>
      <button
        className="SideBarButton"
        onClick={() => {
          props.setRandom(props.randomHex());
        }}
      >
        Generate random color hex code
      </button>
      <p className="hexcodeis"> The hexcode is: {props.random} </p>
    </div>
  );
}
