import React, { useState } from 'react';
import Input from './../Components/Input/Input';
import Button from './../Components/Button/Button';
import './Page.css';
import { page2 } from './../actions';
export default function Page2({ state, dispatch }) {
  let [workspaceName, setWorkspaceName] = useState('');
  let [workspaceUrl, setWorspaceUrl] = useState('');

  let onClick = () => {
    dispatch(page2(workspaceName, workspaceUrl));
  };

  return (
    <>
      <h1 className="heading">Let's set up a home for all your work</h1>
      <p className="sub-heading">You can always create another workspace later.</p>
      <div className="page">
        <Input
          title="Workspace Name"
          placeholder="Eden"
          value={workspaceName}
          changeValue={setWorkspaceName}
        ></Input>
        <Input
          title="Workspace Url"
          placeholder="Example.com"
          value={workspaceUrl}
          changeValue={setWorspaceUrl}
        ></Input>
        <Button text="Create Workspace" onClick={onClick}></Button>
      </div>
    </>
  );
}
