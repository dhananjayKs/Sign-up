import Circle from './Circle';
import Line from './Line';
import './ProgressBar.css';
export default function ProgressBar({ currentState, steps = 1 }) {
  let bar = [];

  for (let i = 1; i < steps + 1; i++) {
    let circleChecked = i <= currentState ? true : false;
    let circle = <Circle key={`circle${i}`} number={i} checked={circleChecked}></Circle>;

    let lineState = 'noline';

    if (i < currentState) {
      lineState = 'full';
    } else if (i === currentState) {
      lineState = 'half';
    } else {
      lineState = 'noLine';
    }

    let line = <Line key={`line${i}`} full={lineState}></Line>;
    bar.push(circle);
    if (i < steps) {
      bar.push(line);
    }
  }

  return <div className="progress-bar">{bar}</div>;
}
