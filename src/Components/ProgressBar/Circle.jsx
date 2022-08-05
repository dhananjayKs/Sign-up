import React from 'react';
import './Circle.css';

export default function Circle({ number, checked }) {
  let progressCircleChecked = (
    <div className="progress-circle-checked">
      <p className="number">{number}</p>
    </div>
  );

  let progressCircleUnchecked = (
    <div className="progress-circle-unchecked">
      <p className="number">{number}</p>
    </div>
  );

  return checked ? progressCircleChecked : progressCircleUnchecked;
}
