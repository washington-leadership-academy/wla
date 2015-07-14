# Gulp Init Squarespace

A boilerplate for working with Gulp and Squarespace. This repo makes it easy to write Less CSS and ES6 for your Squarespace project; it also ships with some Squarespace specific utility functions.

## Getting Started

First fork and then clone this repository. Then in the command line do the following.

    cd gulp-init-squarespace
    npm install
    cd template
    git clone https://{my-site-title}.squarespace.com/template.git
    gulp watch

## Loading Files in your Template

The Gulp tasks create files in your /template/assets/ folder. In order to load these files up into your site you need to manually load the generated JavaScript and CSS files into your template. You can do that like this.

    <!-- The script is always called main.js -->
    <script src="assets/scripts/main.js"></script>

    <!-- The CSS file will take on whatever file name you gave it. -->
    <link rel="stylesheet" type="text/css" href="assets/{my-stylesheet}.css">

Rather than writing a task to combine all of your scripts and stylesheets, I've opted to rely on ES6 and Less imports to combine files for you. So, if you want to combine all of your CSS into a single file, simply create a file called main.css in the root of the styles folder that looks something like this.

    // This is the main less file, import all other files here.
    @import "./modules/my-module.less";

Similarly, for your JavaScript you can do something like this.

    // This is the main.js file, import all other files here.
    import { MyModule } from './modules/my-module.js';

## Tasks

The complete list of tasks that are supported right now.

- **watch** Watches for changes to your .less and .js files in the styles and scripts directory.
- **browserify** Compiles main.js into a browserify bundle in /template/assets/scripts.
- **less** Compiles all Less files in the root of the styles folder and puts them in /template/assets/styles.
- **invalidate-cached-assets** Assets loaded from Squarespace's assets folder are cached aggressively. This task invalidates that cache, forcing the server to load in the latest version of the asset.