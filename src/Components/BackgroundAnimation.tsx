import React from 'react';
import './BackgroundAnimation.css';

const ROWS = 10;
const COLUMNS = 20;

const BackgroundAnimation = () => {
  const circles = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS - (row % 2); col++) {
      const key = `${row}-${col}`;
      const delay = Math.random() * 50; // Random delay for variation
      circles.push(
        <div
          key={key}
          className="circle"
          style={{
            animationDelay: `${delay}s`,
            left: `${(col + (row % 2) * 0.5) * 120}px`,
            bottom: `${row * -60}px`,
          }}
        />
      );
    }
  }

  return <div className="background-grid">{circles}</div>;
};

export default BackgroundAnimation;
