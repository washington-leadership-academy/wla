# Gulp Init Squarespace

A boilerplate for working with Gulp and Squarespace. This repo makes it easy to write Less CSS and ES6 for your Squarespace project; it also ships with some Squarespace specific utility functions.

## Getting Started

First fork and then clone this repository. Then in the command line do the following.

    cd gulp-init-squarespace
    npm install
    cd template
    git clone https://{my-site-title}.squarespace.com/template.git
    gulp watch

## Tasks

The complete list of tasks that are supported right now.

- watch: Watches for changes to your .less and .js files in the styles and scripts directory.
- browserify: Compiles main.js into a browserify bundle in /template/assets/scripts.
- less: Compiles all Less files in the root of the styles folder and puts them in /template/assets/styles.
- invalidate-cached-assets: Assets loaded from Squarespace's assets folder are cached aggressively. This task invalidates that cache, forcing the server to load in the latest version of the asset.