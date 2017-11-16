# CSS in JS
React: [CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js) techniques comparison.

## Usage
Inside each package folder, run:

```bash
npm i
npm run build && open index.html
```

## Features

**How to read the table**

More ticks doesn't mean "better", it depends on your needs.
For example, if a package supports the css file extraction you can run the autoprefixing at build time.

| Package | Version | Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
|---------|:-------:|:--------------------------:|:--------------:|:-------------:|:-------------------------:|:----------------:|
| [aphrodite](https://github.com/Khan/aphrodite) | 1.2.3 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [babel-plugin-css-in-js](https://github.com/martinandert/babel-plugin-css-in-js) | 1.2.2 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [babel-plugin-pre-style](https://github.com/soluml/babel-plugin-pre-style) | 1.0.9-alpha | | ✓ | ✓ | ✓ | ✓ |
| [bloody-react-styled](https://github.com/bloodyowl/react-styled) | 3.0.0 | | ✓ | ✓ | | |
| [classy](https://github.com/inturn/classy) | 0.3.0 | | ✓ | ✓ | ✓ | |
| [csjs](https://github.com/rtsao/csjs) | 1.0.0 | | ✓ | ✓ | | |
| [css-constructor](https://github.com/siddharthkp/css-constructor) | 0.1.1 | ✓ | ✓ | ✓ | | |
| [css-light](https://github.com/streamich/css-light) | 1.1.0 | | ✓ | ✓ | ✓ | ✓ |
| [css-loader](https://github.com/webpack/css-loader) | 0.15.6 | | ✓ | ✓ | | ✓ |
| [css-ns](https://github.com/jareware/css-ns) | 1.0.0 | | ✓ | ✓ | | ✓ |
| [cssobj](https://github.com/cssobj/cssobj) | 0.2.21 | ✓ | ✓ | ✓ | ✓ | |
| [cssx-loader](https://github.com/krasimir/cssx) | 3.8.0 | ✓ | ✓ | ✓ | | ✓ |
| [emotion](https://github.com/tkh44/emotion) | 6.0.3 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [es-css-modules](https://github.com/jacobp100/es-css-modules) | 1.2.3 | | ✓ | ✓ | | ✓ |
| [freestyler](https://github.com/streamich/freestyler) | 1.0.2 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [glamor](https://github.com/threepointone/glamor) | 2.1.0 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [glamorous](https://github.com/paypal/glamorous) | 1.0.1 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [hyperstyles](https://github.com/colingourlay/hyperstyles) | 3.3.0 | | ✓ | ✓ | | ✓ |
| [i-css](https://github.com/irom-io/i-css) | 1.0.4 | ✓ | ✓ | ✓ | ✓ | |
| [j2c](https://github.com/j2css/j2c) | 0.10.0 | | ✓ | ✓ | ✓ | ✓ |
| [jsxstyle](https://github.com/petehunt/jsxstyle) | 0.0.14 | ✓ | | | ✓ | |
| [linaria](https://github.com/callstack-io/linaria) | 0.0.2-alpha.0 | ✓ | ✓ | ✓ | | ✓ |
| [pre-style](https://github.com/soluml/pre-style) | 1.0.9-alpha | | ✓ | ✓ | | ✓ |
| [radium](https://github.com/FormidableLabs/radium) | 0.13.5 | ✓ | ✓ | ✓ | ✓ | |
| [react-css-builder](https://github.com/jhudson8/react-css-builder) | 0.2.0 | | | | ✓ | |
| [react-css-components](https://github.com/andreypopp/react-css-components) | 0.6.9 | | ✓ | ✓ | | ✓ |
| [react-css-modules](https://github.com/gajus/react-css-modules) | 3.0.2 | | ✓ | ✓ | | ✓ |
| [react-cssom](https://github.com/mbasso/react-cssom) | 1.0.0 | | ✓ | ✓ | | ✓ |
| [react-cxs](https://github.com/jxnblk/react-cxs) | 1.0.0-beta.4 | | ✓ | ✓ | ✓ | ✓ |
| [react-fela](https://github.com/rofrischmann/fela/tree/master/packages/react-fela) | 2.1.0 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [react-free-style](https://github.com/blakeembrey/react-free-style) | 0.6.0 | | ✓ | ✓ | ✓ | ✓ |
| [react-inline-css](https://github.com/RickWong/react-inline-css) | 1.2.0 | | ✓ | ✓ | | |
| [react-inline-style](https://github.com/dowjones/react-inline-style) | 0.1.0 | ✓ | ✓ | ✓ | ✓ | |
| [react-inline](https://github.com/martinandert/react-inline) | 0.6.3 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [react-jss](https://github.com/jsstyles/react-jss) | 2.0.5 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [react-look](https://github.com/rofrischmann/react-look) | 0.6.1 | ✓ | ✓ | ✓ | ✓ | |
| [react-native-web](https://github.com/necolas/react-native-web) | 0.0.11 | ✓ | | | ✓ | ✓ |
| [react-statics-styles](https://github.com/elierotenberg/react-statics-styles) | 3.0.2 | | ✓ | | ✓ | ✓ |
| [react-styl](https://github.com/nick/react-styl) | 0.0.1 | | ✓ | ✓ | | |
| [react-style](https://github.com/js-next/react-style) | 0.5.5 | | | ✓ | ✓ | ✓ |
| [react-styleable](https://github.com/pluralsight/react-styleable) | 1.4.0 | | ✓ | ✓ | | ✓ |
| [react-stylematic](https://github.com/rtsao/react-stylematic) | 1.0.1 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [react-theme](https://github.com/azazdeaz/react-theme) | 0.1.4 | | | | ✓ | |
| [react-vstyle](https://github.com/fdecampredon/react-vstyle) | 0.1.0 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [reactcss](https://github.com/casesandberg/reactcss) | 0.3.2 | ✓ | | | ✓ | |
| [restyles](https://github.com/tkh44/restyles) | 2.0.1 | ✓ | ✓ | ✓ | ✓ | |
| [scope-styles](https://github.com/rtsao/scope-styles) | 0.6.0 |  | ✓ | ✓ | ✓ | ✓ |
| [smart-css](https://github.com/hackhat/smart-css) | 1.1.1 | | ✓ | ✓ | ✓ | |
| [stile](https://github.com/bloodyowl/stile) + [react-media-queries](https://github.com/bloodyowl/react-media-queries) | 2.0.0 | ✓ | | ✓ | ✓ | | |
| [stilr](https://github.com/kodyl/stilr) | 1.1.0 | | ✓ | ✓ | ✓ | ✓ |
| [style-it](https://github.com/buildbreakdo/style-it) | 1.2.9 | | ✓ | ✓ | | |
| [styled-components](https://github.com/styled-components/styled-components) | 1.0.3 | ✓ | ✓ | ✓ | | |
| [styled-jsx](https://github.com/zeit/styled-jsx) | 0.0.7 | ✓ | ✓ | ✓ | | ✓ |
| [styletron-react](https://github.com/rtsao/styletron) | 2.1.2 | ✓ | ✓ | ✓ | ✓ | ✓ |
| [styling](https://github.com/andreypopp/styling) | 0.2.0 | | ✓ | | ✓ | ✓ |
| [superstyle](https://github.com/jxnblk/superstyle) | 1.0.0-1 | | | | ✓ | |
| [typestyle](https://github.com/typestyle/typestyle) | 0.22.3 | | ✓ | ✓ | ✓ | ✓ |
| [uranium](https://github.com/tuckerconnelly/uranium) | 0.1.2 | | | ✓ | ✓ | |

## Testimonials

> ["Wow, this totally makes my week!"](https://twitter.com/dan_abramov/status/604260877622202368) - Dan Abramov

> ["nice compilation of css-in-js techniques"](https://twitter.com/tjholowaychuk/status/739812614239195136) - TJ Holowaychuk

[SurviveJS / Styling React](http://survivejs.com/webpack_react/styling_react/) by Juho Vepsäläinen

[The Case for CSS Modules](http://markdalgleish.github.io/presentation-the-case-for-css-modules) by Mark Dalgleish

[First Class Styles](https://markdalgleish.github.io/presentation-first-class-styles) by Mark Dalgleish

[Styling React.JS applications](https://www.youtube.com/watch?v=19gqsBc_Cx0) by Max Stoiber

## Contributing

If your package is not listed here, feel free to add it.