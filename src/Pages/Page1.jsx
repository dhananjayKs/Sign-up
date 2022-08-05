import React, { useState } from 'react';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import './Page.css';
import { page1 } from '../actions';

export default function Page1({ state, dispatch }) {
  let [fullName, setFullName] = useState('');
  let [displayName, setDisplayName] = useState('');

  let onClick = () => {
    dispatch(page1(fullName, displayName));
  };

  return (
    <>
      <h1 className="heading">Welcome! First things first...</h1>
      <p className="sub-heading">You can always change them later.</p>
      <div className="page">
        <Input
          title="Full Name"
          placeholder="Steve Jobs"
          value={fullName}
          changeValue={setFullName}
        ></Input>
        <Input
          title="Display Name"
          placeholder="Steve"
          value={displayName}
          changeValue={setDisplayName}
        ></Input>
        <Button text="Create Workspace" onClick={onClick}></Button>
      </div>
    </>
  );
}
