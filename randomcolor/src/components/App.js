import React, { useState } from 'react';
import Box from './Box';
import SideBar from './Sidebar.js';
import Square from './Square';

// export default function App() {
//   return (
//     <div className="App">
//       <SideBar />
//       <Box />
//     </div>
//   );
// }

export default function App() {
  const [random, setRandom] = useState('#0f664f');
  const [btnMode, setBtnMode] = useState('Start');
  const [squarePositionX, setSquarePositionX] = useState('500px');
  const [squarePositionY, setSquarePositionY] = useState('500px');
  let speedX = `5px`;
  let speedY = '5px';

  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  const randomHex = () => {
    let hex = '';
    hex += '#';
    for (let i = 1; i <= 6; i++) {
      let random = Math.floor(Math.random() * 16);
      hex += hexArr[random];
    }
    return hex;
  };

  // const changePosition = () => {
  //   if (squarePositionY >= '700px' || squarePositionY <= '0px') {
  //     return -speedY;
  //   }
  //   if (squarePositionX <= '300px' || squarePositionX >= '1400px') {
  //     return -speedX;
  //   }
  //   set;
  //   setSquarePositionY(squarePositionY + speedY);
  // };

  return (
    <div className="App">
      <SideBar
        random={random}
        setRandom={setRandom}
        randomHex={randomHex}
        btnMode={btnMode}
        setBtnMode={setBtnMode}
        //changePosition={changePosition}
      />
      <Box random={random}></Box>
      <Square
        squarePositionX={squarePositionX}
        setSquarePositionX={setSquarePositionX}
        squarePositionY={squarePositionY}
        setSquarePositionY={setSquarePositionY}
      ></Square>
    </div>
  );
}
