import React from 'react';
import ReactDOM from 'react-dom';
import glamorous from 'glamorous';
const { Div } = glamorous;

const MyStyledButton = glamorous.button({
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
  '@media(max-width: 480px)': {
    width: 160,
  },
});

const Button = () => (
  // Div could also be used like: <glamorous.Div></glamorous.Div>
  <Div textAlign="center">
    <MyStyledButton>
      Click me!
    </MyStyledButton>
  </Div>
);

ReactDOM.render(<Button />, document.getElementById('content'));
