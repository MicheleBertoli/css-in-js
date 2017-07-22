import React from 'react';
import ReactDOM from 'react-dom';
import Style from 'restyles';

const App = () => (
  <Style
    css={{
      textAlign: 'center',
      '& .button': {
        backgroundColor: '#ff0000',
        width: 320,
        padding: 20,
        borderRadius: 5,
        border: 'none',
        outline: 'none',
        ':hover': {
          color: '#fff',
        },
        ':active': {
          position: 'relative',
          top: 2,
        },
        '@media (max-width: 480px)': {
          width: 160,
        },
      }
    }}
    render={
      cls => (
        <div className={cls}>
          <button className="button">Click me!</button>
        </div>
      )
    }
  />
)

ReactDOM.render(<App />, document.getElementById('content'));
