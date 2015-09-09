import {create} from 'virtual-dom'
import hyperstyles from 'hyperstyles'

import styles from './button.css'

const h = hyperstyles(styles)

function render() {
    return h('div.container', [
        h('button.button', 'Click me!')
    ]);
}

document.querySelector('#content').appendChild(create(render()))
