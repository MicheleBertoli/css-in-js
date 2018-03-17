import React, {Component} from 'react';
import {render} from 'react-dom';
import {rule} from './nano';

const container = rule({
  textAlign: 'center'
});

const button = rule({
  background: 'red',
  width: '320px',
  padding: '20px',
  borderRadius: '5px',
  border: 'none',
  outline: 'none',
  ':hover': {
    color: '#fff',
  },
  ':active': {
    position: 'relative',
    top: '2px',
  },
  '@media (max-width: 480px)': {
    width: '160px',
  },
});

render(
  <div className={container}>
    <button className={button}>Click me!</button>
  </div>
, document.getElementById('content'));
