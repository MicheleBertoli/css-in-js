import {Component} from 'react';
import {css, inject} from 'css-light';

export class Comp extends Component {
  componentWillMount() {
    if (this.css) {
      if (!this.css['@@once']) {
        this.css['@@once'] = 1;
        inject(css(this.css()));
      }
    }
  }
}
