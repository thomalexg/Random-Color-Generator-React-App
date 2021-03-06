import React from 'react';

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
          props.setRandom(
            props.randomColor({ hue: props.hue, luminosity: props.luminosity }),
          );
        }}
      >
        Generate random color hex code
      </button>
      <p className="hexcodeis"> The hexcode is: {props.random} </p>
      <label Htmlfor="color">Choose a color:</label>
      <select
        id="color"
        className="SelectColor"
        value={props.hue}
        onChange={(e) => props.setHue(e.target.value)}
      >
        <option value="" />
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
        <option value="red">red</option>
        <option value="purple">purple</option>
      </select>
      <select
        id="luminosity"
        className="SelectLuminosity"
        value={props.luminosity}
        onChange={(e) => props.setLuminosity(e.target.value)}
      >
        <option value="" />
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="bright">bright</option>
      </select>
      <input
        type="text"
        placeholder="width(Number)"
        value={props.width}
        onChange={(e) => {
          props.setWidth(Number(e.target.value));
        }}
      />
      <button
        className="StartSquareBtn"
        onClick={() => {
          startStop();
        }}
      >
        {props.btnMode}
      </button>
    </div>
  );
}
