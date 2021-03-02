import React from 'react';

export default function Box(props) {
  const styleBox = {
    backgroundColor: props.random,
    width: props.width,
    height: props.height,
  };
  return <div className="Box" style={styleBox}/>;
}
