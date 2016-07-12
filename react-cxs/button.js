import React from 'react';
import ReactDOM from 'react-dom';

const Component = () => {
  const classNames = {
    container: {
      textAlign: 'center'
    },
    button: {
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
    }
  };

  return (
    <div className={classNames.container}>
      <button className={classNames.button}>Click me!</button>
    </div>
  );
};

ReactDOM.render(<Component />, document.getElementById('content'));
