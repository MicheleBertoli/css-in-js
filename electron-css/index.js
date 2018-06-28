import React, {Component} from 'react';
import {render} from 'react-dom';
import {CSS, MediaQuery} from 'electron-css';

const mobileOnly = MediaQuery({
  maxWidth: '480px'
})

const container = CSS({
  textAlign: 'center'
});

const button = CSS({
  background: 'red',
  width: '320px',
  padding: '20px',
  borderRadius: '5px',
  border: 'none',
  outline: 'none',
  onHover: {
    color: '#fff',
  },
  onActive: {
    position: 'relative',
    top: '2px',
  },
  [mobileOnly]: {
    width: '160px'
  }
});

render(
  <div className={container}>
    <button className={button}>Click me!</button>
  </div>
, document.getElementById('content'));