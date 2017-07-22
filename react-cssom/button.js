import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSOM from 'react-cssom';

class Container extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

Container.displayName = 'Container';

class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}

Button.displayName = 'Button';

ReactDOM.render(
  <Container>
    <Button>Click me!</Button>
  </Container>,
  document.getElementById('content')
);
