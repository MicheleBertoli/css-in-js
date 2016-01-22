const {React} = require('./css-ns')('Button');

const Button = React.createClass({
  render() {
    return (
      <div className="container">
        <button className="button">Click me!</button>
      </div>
    );
  }
});

React.render(<Button />, document.getElementById('content'));
