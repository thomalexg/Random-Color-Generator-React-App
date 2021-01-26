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

  return (
    <div className="App">
      <SideBar
        random={random}
        setRandom={setRandom}
        randomHex={randomHex}
        btnMode={btnMode}
        setBtnMode={setBtnMode}
      />
      <Box random={random}></Box>
      <Square></Square>
    </div>
  );
}
