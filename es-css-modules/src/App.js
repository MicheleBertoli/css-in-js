import { render } from 'react-dom';
import React from 'react';
import Paragraph from './Paragraph';
import Button from './Button';

const App = () => (
  <div>
    <Paragraph />
    <Button />
  </div>
);

render(<App />, document.getElementById('main'));
