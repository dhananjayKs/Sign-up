import React, { useState, useEffect } from 'react';
import Button from './../Components/Button/Button';
import './Page.css';
import Cards from './../Components/Cards/Cards';
import { page3 } from './../actions';
import person from './../person.jpeg';
import group from './../group.jpeg';
export default function Page3({ state, dispatch }) {
  let [subscriptionType, setSubscriptionType] = useState('self');

  useEffect(() => {
    setSubscriptionType(state.subscriptionType);
  }, [state.subscriptionType]);

  let onClick = () => {
    dispatch(page3(subscriptionType));
  };

  return (
    <>
      <h1 className="heading">How are you planning to use Eden?</h1>
      <p className="sub-heading">We'll streamline your setup experience accordingly.</p>
      <div className="page">
        <div className="card-container">
          <Cards
            value={subscriptionType}
            title="self"
            changeValue={setSubscriptionType}
            mainText="For myself"
            subtext="Write better. Think clearly. Stay organized."
            logo={person}
          ></Cards>
          <Cards
            value={subscriptionType}
            title="team"
            changeValue={setSubscriptionType}
            mainText="With my team"
            subtext="Wikis, docs, tasks & projects, all in one place."
            logo={group}
          ></Cards>
        </div>
        <Button text={'Create Workspace'} onClick={onClick}></Button>
      </div>
    </>
  );
}
