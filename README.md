# Gatsby React Boilerplate

### Requirements

*  [Node.js](http://nodejs.org): for all the magic
*  [Gatsby](https://www.gatsbyjs.org/docs/)

### Features

* Basic configuration and folder structure
* Uses postcss and sass (with autoprefixer and pixrem)
* Leaves the styling to you
* Uses data from local json files
* [SVG sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/): Add your icons in `components/icon` as .icon files and use them.

### How to proceed

1.  Prepare a coffee
1.  Run: `npm i` to install the dependencies
1.  Run: `npm run dev` to run Gatsby
1.  You should see shortly some text that says `The development server is listening at: http://localhost:8000`. Open that address in your browser and…
1.  Start coding!

### How to build

1.  Run: `npm run build` to build website into `/public` folder

### Considerations

* **RTL**: The usual method of generating different css file for RTL pages (as seen in static-html-boilerplate) will not work out of the box here since Gatsby pulls all the css together, this means the RTL css will override the LTR one.
