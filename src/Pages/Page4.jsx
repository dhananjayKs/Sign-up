import React from 'react';
import Button from './../Components/Button/Button';
import tick from '../icons8-tick-64.png';

export default function Page4({ state, dispatch }) {
  let onClick = () => {
    console.log(state);
    window.alert('Data Submitted!! check console.');
  };

  return (
    <>
      <div className="conlusion-page">
        <div className="circle-container">
          <div className="circle">
            <img src={tick} alt="tick" height={64} width={64}></img>
          </div>
        </div>
        <h1 className="conclusion-heading">Congratulations {state.displayName}!</h1>
        <p className="conclusion-sub-heading">
          You have completed the onboarding, you can start using the Eden!
        </p>
        <Button text={'Launch Eden'} onClick={onClick}></Button>
      </div>
    </>
  );
}
