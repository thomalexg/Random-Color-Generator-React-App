import React, { useEffect, useState } from 'react';
import Box from './Box';
import SideBar from './Sidebar.js';
import Square from './Square';
const randomColor = require('randomcolor'); // import the script

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
  //
  const [hue, setHue] = useState('random');
  const [luminosity, setLuminosity] = useState('random');
  //
  const [height, setHeight] = useState(800);
  const [width, setWidth] = useState(1800);

  useEffect(() => {
    if (btnMode === 'Stop') {
      if (squarePositionY >= height - 100 && speedY > 0) {
        setSpeedY(speedY * -1);
        setRandom(randomColor({ hue, luminosity }));
      }
      if (squarePositionY <= 0 && speedY < 0) {
        setSpeedY(speedY * -1);
        setRandom(randomColor({ hue, luminosity }));
      }
      if (squarePositionX <= 250 && speedX < 0) {
        setSpeedX(speedX * -1);
        console.log(speedX);
        setRandom(randomColor({ hue, luminosity }));
      }
      if (squarePositionX >= width - 100 && speedX > 0) {
        setSpeedX(speedX * -1);
        console.log(speedX);
        setRandom(randomColor({ hue, luminosity }));
      }
      const interval = setInterval(() => {
        setSquarePositionY(squarePositionY + speedY);
        setSquarePositionX(squarePositionX + speedX);
      }, 10);
      return () => {
        clearInterval(interval);
      };
    }
  }, [
    btnMode,
    squarePositionX,
    squarePositionY,
    speedX,
    speedY,
    hue,
    luminosity,
    width,
    height,
  ]);

  const styleApp = { width, height };
  return (
    <div className="App" style={styleApp}>
      <SideBar
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
        random={random}
        setRandom={setRandom}
        randomColor={randomColor}
        hue={hue}
        setHue={setHue}
        luminosity={luminosity}
        setLuminosity={setLuminosity}
        // randomHex={randomHex}
        btnMode={btnMode}
        setBtnMode={setBtnMode}
        // changePosition={changePosition}
      />
      <Box
        random={random}
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
      ></Box>
      <Square
        squarePositionX={squarePositionX}
        setSquarePositionX={setSquarePositionX}
        squarePositionY={squarePositionY}
        setSquarePositionY={setSquarePositionY}
      ></Square>
    </div>
  );
}
