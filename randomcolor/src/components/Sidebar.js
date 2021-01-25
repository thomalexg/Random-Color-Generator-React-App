import React, { useState } from 'react';

//randomHex();
export default function SideBar(props) {
  const [random, setRandomHex] = useState('#0f664f');
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  let hex = '';
  const randomHex = () => {
    hex += '#';
    for (let i = 1; i <= 6; i++) {
      let random = Math.floor(Math.random() * 16);
      hex += hexArr[random];
    }
    return hex;
  };

  return (
    <div className="SideBar" style={{ backgroundColor: `${random}` }}>
      <button
        className="SideBarButton"
        onClick={() => {
          hex = '';
          setRandomHex(randomHex());
        }}
      >
        Generate random color hex code
      </button>
      <p>The hexcode is: {random} </p>
    </div>
  );
}
