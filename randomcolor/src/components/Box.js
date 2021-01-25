import React from 'react';

export default function Box(props) {
  return (
    <div className="Box" style={{ backgroundColor: `${props.random}` }}></div>
  );
}
