import React from 'react';
import ReactDOM from 'react-dom';
import cxs from 'cxs';

const container = cxs({
  textAlign: 'center'
});

const button = cxs({
  backgroundColor: '#ff0000',
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
    top: '2px'
  },
  '@media (max-width: 480px)': {
    width: '160px'
  }
});

const Component = () => (
  <div className={container}>
    <button className={button}>Click me!</button>
  </div>
);

ReactDOM.render(<Component />, document.getElementById('content'));
