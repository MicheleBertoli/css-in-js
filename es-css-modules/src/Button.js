import React from 'react';
import { base as button, primary as buttonPrimary } from '../styles/button.m.css';

export default () => (
  <button className={`${button} ${buttonPrimary}`}>
    Button
  </button>
);
