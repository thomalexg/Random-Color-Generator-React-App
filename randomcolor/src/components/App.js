import React, { useEffect, useState } from 'react';
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
// let speedX = 25;
// let speedY = 25;
export default function App() {
  const [random, setRandom] = useState('#0f664f');
  const [btnMode, setBtnMode] = useState('Start');
  const [squarePositionX, setSquarePositionX] = useState(500);
  const [squarePositionY, setSquarePositionY] = useState(500);
  const [speedX, setSpeedX] = useState(30);
  const [speedY, setSpeedY] = useState(30);
  // let speedX = 5;
  // let speedY = 5;

  // const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  // const randomHex = () => {
  //   let hex = '';
  //   hex += '#';
  //   for (let i = 1; i <= 6; i++) {
  //     let random = Math.floor(Math.random() * 16);
  //     hex += hexArr[random];
  //   }
  //   return hex;
  // };
  useEffect(() => {
    if (btnMode === 'Stop') {
      if (squarePositionY >= 700 || squarePositionY <= 0) {
        speedY = -speedY;
        setRandom(randomHex());
      }
      if (squarePositionX <= 300 || squarePositionX >= 1400) {
        speedX = -speedX;
        setRandom(randomHex());
      }
      const interval = setInterval(() => {
        setSquarePositionY(squarePositionY + speedY);
        setSquarePositionX(squarePositionX + speedX);
        // setRandom(randomHex());
      }, 350);
      return () => {
        clearInterval(interval);
      };
    }
  }, [btnMode, squarePositionX, squarePositionY]);
  //   const changePosition = () => {
  // if (squarePositionY >= 700 || squarePositionY <= 0) {
  //   speedY = -speedY;
  //   setRandom(randomHex());
  // }
  // if (squarePositionX <= 300 || squarePositionX >= 1400) {
  //   speedX = -speedX;
  //   setRandom(randomHex());
  // }
  // setInterval(() => {
  //   setSquarePositionY(squarePositionY + speedY);
  //   setSquarePositionX(squarePositionX + speedX);
  //   // setRandom(randomHex());
  // }, 350);
  // };

  return (
    <div className="App">
      <SideBar
        random={random}
        setRandom={setRandom}
        randomHex={randomHex}
        btnMode={btnMode}
        setBtnMode={setBtnMode}
        // changePosition={changePosition}
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
