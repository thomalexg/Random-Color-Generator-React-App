import React, { useEffect, useState } from 'react';
import Box from './Box';
import SideBar from './Sidebar.js';
import Square from './Square';
var randomColor = require('randomcolor'); // import the script
var color = randomColor(); // a hex code for an attractive color

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

export default function App() {
  const [random, setRandom] = useState('#0f664f');
  const [btnMode, setBtnMode] = useState('Start');
  const [squarePositionX, setSquarePositionX] = useState(660);
  const [squarePositionY, setSquarePositionY] = useState(500);
  const [speedX, setSpeedX] = useState(5);
  const [speedY, setSpeedY] = useState(5);

  useEffect(() => {
    if (btnMode === 'Stop') {
      if (squarePositionY >= 700 && speedY > 0) {
        setSpeedY(speedY * -1);
        setRandom(randomColor());
      }
      if (squarePositionY <= 0 && speedY < 0) {
        setSpeedY(speedY * -1);
        setRandom(randomColor());
      }
      if (squarePositionX <= 300 && speedX < 0) {
        setSpeedX(speedX * -1);
        console.log(speedX);
        setRandom(randomColor());
      }
      if (squarePositionX >= 1400 && speedX > 0) {
        setSpeedX(speedX * -1);
        console.log(speedX);
        setRandom(randomColor());
      }
      const interval = setInterval(() => {
        setSquarePositionY(squarePositionY + speedY);
        setSquarePositionX(squarePositionX + speedX);
      }, 10);
      return () => {
        clearInterval(interval);
      };
    }
  }, [btnMode, squarePositionX, squarePositionY, speedX, speedY]);

  return (
    <div className="App">
      <SideBar
        random={random}
        setRandom={setRandom}
        randomColor={randomColor}
        // randomHex={randomHex}
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
