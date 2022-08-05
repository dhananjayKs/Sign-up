import React from 'react';
import './Input.css';
export default function Input({ title, placeholder, value, changeValue }) {
  return (
    <div className="input-container">
      <label className="input-title">{title}</label>
      <input
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      ></input>
    </div>
  );
}
