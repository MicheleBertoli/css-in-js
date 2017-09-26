import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {renderCss, addStyles} from 'i-css';

const button = addStyles({
    container: {
        textAlign: 'center'
    },
    item: {
        backgroundColor: '#ff0000',
        width: 320,
        padding: 20,
        borderRadius: 5,
        border: 'none',
        outline: 'none',
        '&:hover': {
            color: '#fff'
        },
        '&:active': {
            position: 'relative',
            top: 2
        },
        '@media (min-width: 480px)': {
            width: 160
        }
    },
    _global: {
        'html, body, #root': {
            padding: 0,
            margin: 0
        }
    },
});

class Button extends Component {
    render() {
        return (
            <div className={button.container}>
                <button className={button.item}>Click me!</button>
            </div>
        );
    }
}

renderCss(document.getElementById('rootCss')); //call it once in root component
ReactDOM.render(<Button />, document.getElementById('content'));