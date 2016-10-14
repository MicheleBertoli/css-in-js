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

More crosses doesn't mean "better", it depends on your needs.
For example, if a package supports the css file extraction you can run the autoprefixing at build time.

| Package | Version | Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
|---------|:-------:|:--------------------------:|:--------------:|:-------------:|:-------------------------:|:----------------:|
| [aphrodite](https://github.com/Khan/aphrodite) | [![npm version](https://badge.fury.io/js/aphrodite.svg)](https://badge.fury.io/js/aphrodite) | x | x | x | x | x |
| [babel-plugin-css-in-js](https://github.com/martinandert/babel-plugin-css-in-js) | [![npm version](https://badge.fury.io/js/babel-plugin-css-in-js.svg)](https://badge.fury.io/js/babel-plugin-css-in-js) | x | x | x | x | x |
| [bloody-react-styled](https://github.com/bloodyowl/react-styled) | [![npm version](https://badge.fury.io/js/bloody-react-styled.svg)](https://badge.fury.io/js/bloody-react-styled) | | x | x | | |
| [cess-loader](https://github.com/irom-io/cess-loader) | [![npm version](https://badge.fury.io/js/cess-loader.svg)](https://badge.fury.io/js/cess-loader) | | x | x | | x |
| [csjs](https://github.com/rtsao/csjs) | [![npm version](https://badge.fury.io/js/csjs.svg)](https://badge.fury.io/js/csjs) | | x | x | | |
| [css-loader](https://github.com/webpack/css-loader) | [![npm version](https://badge.fury.io/js/css-loader.svg)](https://badge.fury.io/js/css-loader) | | x | x | | x |
| [css-ns](https://github.com/jareware/css-ns) | [![npm version](https://badge.fury.io/js/css-ns.svg)](https://badge.fury.io/js/css-ns) | | x | x | | x |
| [cssobj](https://github.com/cssobj/cssobj) | [![npm version](https://badge.fury.io/js/cssobj.svg)](https://badge.fury.io/js/cssobj) | x | x | x | x | |
| [cssx-loader](https://github.com/krasimir/cssx) | [![npm version](https://badge.fury.io/js/cssx-loader.svg)](https://badge.fury.io/js/cssx-loader) | x | x | x | | x |
| [es-css-modules](https://github.com/jacobp100/es-css-modules) | [![npm version](https://badge.fury.io/js/es-css-modules.svg)](https://badge.fury.io/js/es-css-modules) | | x | x | | x |
| [glamor](https://github.com/threepointone/glamor) | [![npm version](https://badge.fury.io/js/glamor.svg)](https://badge.fury.io/js/glamor) | x | x | x | x | x |
| [hyperstyles](https://github.com/colingourlay/hyperstyles) | [![npm version](https://badge.fury.io/js/hyperstyles.svg)](https://badge.fury.io/js/hyperstyles) | | x | x | | x |
| [j2c](https://github.com/j2css/j2c) | [![npm version](https://badge.fury.io/js/j2c.svg)](https://badge.fury.io/js/j2c) | | x | x | x | x |
| [jsxstyle](https://github.com/petehunt/jsxstyle) | [![npm version](https://badge.fury.io/js/jsxstyle.svg)](https://badge.fury.io/js/jsxstyle) | x | | | x | |
| [radium](https://github.com/FormidableLabs/radium) | [![npm version](https://badge.fury.io/js/radium.svg)](https://badge.fury.io/js/radium) | x | x | x | x | |
| [react-classy](https://github.com/inturn/classy) | [![npm version](https://badge.fury.io/js/react-classy.svg)](https://badge.fury.io/js/react-classy) | | x | x | x | |
| [react-css-builder](https://github.com/jhudson8/react-css-builder) | [![npm version](https://badge.fury.io/js/react-css-builder.svg)](https://badge.fury.io/js/react-css-builder) | | | | x | |
| [react-css-components](https://github.com/andreypopp/react-css-components) | [![npm version](https://badge.fury.io/js/react-css-components.svg)](https://badge.fury.io/js/react-css-components) | | x | x | | x |
| [react-css-modules](https://github.com/gajus/react-css-modules) | [![npm version](https://badge.fury.io/js/react-css-modules.svg)](https://badge.fury.io/js/react-css-modules) | | x | x | | x |
| [react-cxs](https://github.com/jxnblk/react-cxs) | [![npm version](https://badge.fury.io/js/react-cxs.svg)](https://badge.fury.io/js/react-cxs) | | x | x | x | x |
| [react-fela](https://github.com/rofrischmann/react-fela) | [![npm version](https://badge.fury.io/js/react-fela.svg)](https://badge.fury.io/js/react-fela) | x | x | x | x | x |
| [react-free-style](https://github.com/blakeembrey/react-free-style) | [![npm version](https://badge.fury.io/js/react-free-style.svg)](https://badge.fury.io/js/react-free-style) | | x | x | x | x |
| [react-inline-css](https://github.com/RickWong/react-inline-css) | [![npm version](https://badge.fury.io/js/react-inline-css.svg)](https://badge.fury.io/js/react-inline-css) | | x | x | | |
| [react-inline-style](https://github.com/dowjones/react-inline-style) | [![npm version](https://badge.fury.io/js/react-inline-style.svg)](https://badge.fury.io/js/react-inline-style) | x | x | x | x | |
| [react-inline](https://github.com/martinandert/react-inline) | [![npm version](https://badge.fury.io/js/react-inline.svg)](https://badge.fury.io/js/react-inline) | x | x | x | x | x |
| [react-jss](https://github.com/jsstyles/react-jss) | [![npm version](https://badge.fury.io/js/react-jss.svg)](https://badge.fury.io/js/react-jss) | x | x | x | x | x |
| [react-look](https://github.com/rofrischmann/react-look) | [![npm version](https://badge.fury.io/js/react-look.svg)](https://badge.fury.io/js/react-look) | x | x | x | x | |
| [react-native-web](https://github.com/necolas/react-native-web) | [![npm version](https://badge.fury.io/js/react-native-web.svg)](https://badge.fury.io/js/react-native-web) | x | | | x | x |
| [react-statics-styles](https://github.com/elierotenberg/react-statics-styles) | [![npm version](https://badge.fury.io/js/react-statics-styles.svg)](https://badge.fury.io/js/react-statics-styles) | | x | | x | x |
| [react-styl](https://github.com/nick/react-styl) | [![npm version](https://badge.fury.io/js/react-styl.svg)](https://badge.fury.io/js/react-styl) | | x | x | | |
| [react-style](https://github.com/js-next/react-style) | [![npm version](https://badge.fury.io/js/react-style.svg)](https://badge.fury.io/js/react-style) | | | x | x | x |
| [react-styleable](https://github.com/pluralsight/react-styleable) | [![npm version](https://badge.fury.io/js/react-styleable.svg)](https://badge.fury.io/js/react-styleable) | | x | x | | x |
| [react-stylematic](https://github.com/rtsao/react-stylematic) | [![npm version](https://badge.fury.io/js/react-stylematic.svg)](https://badge.fury.io/js/react-stylematic) | x | x | x | x | x |
| [react-theme](https://github.com/azazdeaz/react-theme) | [![npm version](https://badge.fury.io/js/react-theme.svg)](https://badge.fury.io/js/react-theme) | | | | x | |
| [react-vstyle](https://github.com/fdecampredon/react-vstyle) | [![npm version](https://badge.fury.io/js/react-theme.svg)](https://badge.fury.io/js/react-theme) | x | x | x | x | x |
| [reactcss](https://github.com/casesandberg/reactcss) | [![npm version](https://badge.fury.io/js/reactcss.svg)](https://badge.fury.io/js/reactcss) | x | | | x | |
| [scope-styles](https://github.com/rtsao/scope-styles) | [![npm version](https://badge.fury.io/js/scope-styles.svg)](https://badge.fury.io/js/scope-styles) |  | x | x | x | x |
| [smart-css](https://github.com/hackhat/smart-css) | [![npm version](https://badge.fury.io/js/smart-css.svg)](https://badge.fury.io/js/smart-css) | | x | x | x | |
| [stile](https://github.com/bloodyowl/stile) + [react-media-queries](https://github.com/bloodyowl/react-media-queries) | [![npm version](https://badge.fury.io/js/stile.svg)](https://badge.fury.io/js/stile) | x | | x | x | | |
| [stilr](https://github.com/kodyl/stilr) | [![npm version](https://badge.fury.io/js/stilr.svg)](https://badge.fury.io/js/stilr) | | x | x | x | x |
| [style-it](https://github.com/buildbreakdo/style-it) | [![npm version](https://badge.fury.io/js/style-it.svg)](https://badge.fury.io/js/style-it) | | x | x | | |
| [styled-components](https://github.com/styled-components/styled-components) | [![npm version](https://badge.fury.io/js/styled-components.svg)](https://badge.fury.io/js/styled-components) | x | x | x | | |
| [styling](https://github.com/andreypopp/styling) | [![npm version](https://badge.fury.io/js/styling.svg)](https://badge.fury.io/js/styling) | | x | | x | x |

## Testimonials

> ["Wow, this totally makes my week!"](https://twitter.com/dan_abramov/status/604260877622202368) - Dan Abramov

> ["nice compilation of css-in-js techniques"](https://twitter.com/tjholowaychuk/status/739812614239195136) - TJ Holowaychuk

[SurviveJS / Styling React](http://survivejs.com/webpack_react/styling_react/) by Juho Vepsäläinen

[The Case for CSS Modules](http://markdalgleish.github.io/presentation-the-case-for-css-modules) by Mark Dalgleish

[First Class Styles](https://markdalgleish.github.io/presentation-first-class-styles) by Mark Dalgleish

## Contributing

If your package is not listed here, feel free to add it.
