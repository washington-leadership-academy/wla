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

All JavaScript is processed with Browserify and Babel (Babelify). main.js is always the root of your website's JS and you can use ES6 imports to bring other files into the bundle.

    // This is the main.js file, import all other files here.
    import { MyModule } from './modules/my-module.js';

## Loading Files in your Template

The Gulp tasks create files in your /template/assets/ folder. In order to load these files up into your site you need to manually load the generated JavaScript and CSS files into your template. You can do that like this.

    <!-- The script is always called main.js -->
    <script src="assets/scripts/main.js"></script>

    <!-- The CSS file will take on whatever file name you gave it. -->
    <link rel="stylesheet" type="text/css" href="assets/{my-stylesheet}.css">

## Tasks

The complete list of tasks that are supported right now.

- **watch** Watches for changes to your .less and .js files in the styles and scripts directory.
- **browserify** Compiles main.js into a browserify bundle in /template/assets/scripts.
- **less** Compiles all Less files in the root of the styles folder and puts them in /template/assets/styles.
- **invalidate-cached-assets** Assets loaded from Squarespace's assets folder are cached aggressively. This task invalidates that cache, forcing the server to load in the latest version of the asset.