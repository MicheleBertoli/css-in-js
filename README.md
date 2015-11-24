# CSS in JS
React: [CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js) techniques comparison.

## Usage
Inside each package folder, run:

```
npm i
npm run build && open index.html
```

## Features

**How to read the table**

More crosses doesn't mean "better", it depends on your needs.
For example, if a package supports the css file extraction you can run the autoprefixing at build time.

| Package | Version | Autoprefixer Included | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
|---------|:-------:|:---------------------:|:--------------:|:-------------:|:-------------------------:|:----------------:|
| [babel-plugin-css-in-js](https://github.com/martinandert/babel-plugin-css-in-js) | 0.1.0 | x | x | x | x | x |
| [bloody-react-styled](https://github.com/bloodyowl/react-styled) | 3.0.0 | | x | x | | |
| [classy](https://github.com/inturn/classy) | 0.3.0 | | x | x | x | |
| [css-loader](https://github.com/webpack/css-loader) | 0.15.6 | | x | x | | x |
| [j2c](https://github.com/pygy/j2c) | 0.7.3 | x | x | x | x | |
| [jsxstyle](https://github.com/petehunt/jsxstyle) | 0.0.14 | x | | | x | |
| [radium](https://github.com/FormidableLabs/radium) | 0.13.5 | x | x | x | x | |
| [react-css-builder](https://github.com/jhudson8/react-css-builder) | 0.2.0 | | | | x | |
| [react-css-modules](https://github.com/gajus/react-css-modules) | 3.0.2 | | x | x | | x |
| [react-free-style](https://github.com/blakeembrey/react-free-style) | 0.6.0 | | x | x | x | |
| [react-inline-css](https://github.com/RickWong/react-inline-css) | 1.2.0 | | x | x | | |
| [react-inline](https://github.com/martinandert/react-inline) | 0.6.3 | x | x | x | x | x |
| [react-inline-style](https://github.com/dowjones/react-inline-style) | 0.1.0 | x | x | x | x | |
| [react-jss](https://github.com/jsstyles/react-jss) | 1.0.0 | x | x | x | x | |
| [react-look](https://github.com/rofrischmann/react-look) | 0.6.1 | x | x | x | x | |
| [react-statics-styles](https://github.com/elierotenberg/react-statics-styles) | 3.0.2 | | x | | x | x |
| [react-styl](https://github.com/nick/react-styl) | 0.0.1 | | x | x | | |
| [react-style](https://github.com/js-next/react-style) | 0.5.5 | | | x | x | x |
| [react-styleable](https://github.com/pluralsight/react-styleable) | 1.4.0 | | x | x | | x |
| [react-theme](https://github.com/azazdeaz/react-theme) | 0.1.4 | | | | x | |
| [reactcss](https://github.com/casesandberg/reactcss) | 0.3.2 | x | | | x | |
| [smart-css](https://github.com/hackhat/smart-css) | 1.1.1 | | x | x | x | |
| [stilr](https://github.com/chriskjaer/stilr) | 1.1.0 | | x | x | x | x |
| [styling](https://github.com/andreypopp/styling) | 0.2.0 | | x | | x | x |

## Testimonials

> ["Wow, this totally makes my week!"](https://twitter.com/dan_abramov/status/604260877622202368) - Dan Abramov

[SurviveJS / Styling React](http://survivejs.com/webpack_react/styling_react) by Juho Vepsäläinen

[React Inline Styles are Fundamentally Flawed](https://byjoeybaker.com/react-inline-styles) by Joey Baker

[The Case for CSS Modules](http://markdalgleish.github.io/presentation-the-case-for-css-modules) by Mark Dalgleish

## Contributing
If your package is not listed here, feel free to add it.
