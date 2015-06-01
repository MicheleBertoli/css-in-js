# CSS in JS
React: [CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js) techniques comparison.

## Usage
Inside each package folder, run:

```
npm install
npm run build && open index.html
```

## Features

**How to read the table**

More crosses doesn't mean "better", it depends on your needs.
For example, if a package supports the css file extraction you can run the autoprefixing at build time.

| Package | Autoprefixer Included | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
|---------|:---------------------:|:--------------:|:-------------:|:-------------------------:|:----------------:|
| [bloody-react-styled](https://github.com/bloodyowl/react-styled) | | x | x | | |
| [css-loader](https://github.com/webpack/css-loader) | | x | x | | x |
| [jsxstyle](https://github.com/petehunt/jsxstyle) | x | | | x | |
| [radium](https://github.com/FormidableLabs/radium) | x | x | x | x | |
| [react-css-builder](https://github.com/jhudson8/react-css-builder) | | | | x | |
| [react-free-style](https://github.com/blakeembrey/react-free-style) | | x | x | x | |
| [react-inline-css](https://github.com/RickWong/react-inline-css) | | x | x | | |
| [react-inline](https://github.com/martinandert/react-inline) | x | x | x | x | x |
| [react-jss](https://github.com/jsstyles/react-jss) | x | x | x | x | |
| [react-statics-styles](https://github.com/elierotenberg/react-statics-styles) | | x | | x | x |
| [react-styl](https://github.com/nick/react-styl) | | x | x | | |
| [react-style](https://github.com/js-next/react-style) | | | x | x | x |
| [smart-css](https://github.com/hackhat/smart-css) | | x | x | x | |
| [stilr](https://github.com/chriskjaer/stilr) | | x | x | x | x |

## Contributing
If your package is not listed here, feel free to add it.
