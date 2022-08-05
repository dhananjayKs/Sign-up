import React from 'react';
import './Line.css';
export default function Line({ full = 'noLine' }) {
  let fullLine = (
    <div className="line-container">
      <div className="full-line" complete={true}></div>
    </div>
  );
  let halfLine = (
    <div className="line-container">
      <div className="half-line" complete={true}>
        <div className="inner-line"></div>
      </div>
    </div>
  );
  let noLine = (
    <div className="line-container">
      <div className="no-line" complete={true}></div>
    </div>
  );
  switch (full) {
    case 'full':
      return fullLine;
    case 'half':
      return halfLine;
    case 'noLine':
      return noLine;
    default:
      return noLine;
  }
}
