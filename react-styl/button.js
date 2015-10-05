import React from 'react';
import ReactStyl from 'react-styl';

ReactStyl(`

.container
  text-align: center

.button
  background-color: #ff0000
  width: 320px
  padding: 20px
  border-radius: 5px
  border: none
  outline: none
  &:hover
    color: #fff
  &:active
    position: relative
    top: 2px

@media (max-width: 480px)
  .button
    width: 160px

`);

const Button = React.createClass({
  render() {
    return (
      <div className="container">
        <button className="button">Click me!</button>
      </div>
    );
  }
});

ReactStyl.addStylesheet();

React.render(<Button />, document.getElementById('content'));
