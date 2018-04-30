[![Build Status](https://travis-ci.org/MicheleBertoli/css-in-js.svg?branch=master)](https://travis-ci.org/MicheleBertoli/css-in-js)

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

**How to read the Package Stats**

<img src="./ReadmeSrc/img/tag.svg" width="11" /> npm version |
<img src="./ReadmeSrc/img/star.svg" width="12" /> stars |
<img src="./ReadmeSrc/img/hand-paper-o.svg" width="12" /> open issues |
<img src="./ReadmeSrc/img/hand-peace-o.svg" width="12" /> closed issues |
<img src="./ReadmeSrc/img/download.svg" width="12" /> weekly downloads

```mmd
return '> This list has been auto-updated ([?](https://github.com/albinotonnina/mmarkdown)) on ' + scripts.getDate()
```

```mmd
return scripts.getTable()
```

## Testimonials

> ["Wow, this totally makes my week!"](https://twitter.com/dan_abramov/status/604260877622202368) - Dan Abramov

> ["nice compilation of css-in-js techniques"](https://twitter.com/tjholowaychuk/status/739812614239195136) - TJ Holowaychuk

[SurviveJS / Styling React](http://survivejs.com/webpack_react/styling_react/) by Juho Vepsäläinen

[The Case for CSS Modules](http://markdalgleish.github.io/presentation-the-case-for-css-modules) by Mark Dalgleish

[First Class Styles](https://markdalgleish.github.io/presentation-first-class-styles) by Mark Dalgleish

[Styling React.JS applications](https://www.youtube.com/watch?v=19gqsBc_Cx0) by Max Stoiber

## Contributing

If your package is not listed here, feel free to add it.

1.  Create a new folder named `package-name` in the root folder.
2.  Implement the red button example using the package.
3.  Add a new entry to [data.json](webpage/src/data.json).
4.  Re-generate the data with: `cd webpage && yarn && yarn update-data`.
