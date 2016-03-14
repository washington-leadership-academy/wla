# Washington Leadership Academy
A custom Squarespace website for washingtonleadershipacademy.org

## Waffle
[![Design Stories in Progress](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=design&title=Design)](http://waffle.io/washington-leadership-academy/wla)
[![Dev Stories in Progress](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=dev&title=Dev)](http://waffle.io/washington-leadership-academy/wla)
[![Stories in QA](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=QA%2FQA&title=QA)](http://waffle.io/washington-leadership-academy/wla)
[![Stories in Client Review](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=Client%20Review&title=Review)](http://waffle.io/washington-leadership-academy/wla)

This project is being designed and developed in the open. Follow along and see our progress on this [Waffle board](https://waffle.io/washington-leadership-academy/wla).

# Gulp Init Squarespace

A boilerplate for working with Gulp and Squarespace. This repo makes it easy to write Less CSS (the up-to-date JavaScript version, not the Squarespace version) and ES6 (using Babel for transpiling) for your Squarespace project; it also ships with some Squarespace specific utility functions.

## Getting Started

First fork and then clone this repository. Then in the command line do the following.

    cd gulp-init-squarespace
    npm install
    cd template
    git clone https://{my-site-title}.squarespace.com/template.git
    gulp watch

## Editing Files

Similar to grunt-init-squarespace, we're keeping your own custom styles and scripts separate from the actual Squarespace template. When you want to edit your CSS and JS, go into the styles and scripts folders in the root directory.

### Less

When editing Less files, anything in the root of the styles folder will get processed and turned into a corresponding file in the ./template/assets/styles folder. Files inside subfolders are not processed intentionally. This allows you to organize your Less in a sensible way, putting modular files in subfolders. You can use imports inside the files your root folder to combine files.

    // This is the main less file, import all other files here.
    @import "./modules/my-module.less";

### JS

All JavaScript is processed with Browserify and Babel (Babelify). It will process each JS file in the root of the ./scripts folder and distribute it to the ./template/assets/scripts folder.

    // This is the main.js file, import all other files here.
    import { MyModule } from './modules/my-module.js';

## Loading Files in your Template

The Gulp tasks create files in your /template/assets/ folder. In order to load these files up into your site you need to manually load the generated JavaScript and CSS files into your template. You can do that like this.

    <script src="assets/scripts/{my-bundled-script}.js"></script>

    <link rel="stylesheet" type="text/css" href="assets/{my-stylesheet}.css">

## Why Assets Instead of the Squarespace Script and CSS Loaders?

The default Squarespace script and CSS loaders cause some problems with custom code. Here are the main bullet points for why I chose to bypass them for this project:

- The <squarespace:script> tag strips attributes, like async, for instance. Bypassing that gives you more freedom to load your JS the way you want.
- Loading CSS files the Squarespace way always goes through the company's proprietary Less preprocessor. There are some edge case issues with that, the biggest one I've come across is using calc() in your CSS; when it goes through a Less preprocessor it evaluates the mathematical expression when you actually want the browser to do that.

## Tasks

The complete list of tasks that are supported right now.

- **watch** Watches for changes to your .less and .js files in the styles and scripts directory.
- **browserify** Compiles all .js files in the root of the scripts folder into a browserify bundle in /template/assets/scripts.
- **less** Compiles all Less files in the root of the styles folder and puts them in /template/assets/styles.
- **invalidate-cached-assets** Assets loaded from Squarespace's assets folder are cached aggressively. This task invalidates that cache, forcing Squarespace's server to load in the latest version of the asset.
