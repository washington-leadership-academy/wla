# Washington Leadership Academy
A custom Squarespace website for [Washington Leadership Academy](washingtonleadershipacademy.org).

## Waffle
[![Design Stories in Progress](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=design&title=Design)](http://waffle.io/washington-leadership-academy/wla)
[![Dev Stories in Progress](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=dev&title=Dev)](http://waffle.io/washington-leadership-academy/wla)
[![Stories in QA](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=Review%2FQA&title=QA)](http://waffle.io/washington-leadership-academy/wla)
[![Stories in Client Review](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=clientreview&title=Review)](http://waffle.io/washington-leadership-academy/wla)

This project is being designed and developed in the open. Follow along and see our progress on this [Waffle board](https://waffle.io/washington-leadership-academy/wla).

## Development

#### Prerequisites
To get started, you'll need [node.js](https://nodejs.org/en/), [gulp-cli](https://www.npmjs.com/package/gulp-cli), and [node-squarespace-server](https://www.npmjs.com/package/node-squarespace-server) installed.
#### Setup
1. Clone this repo.
2. Run `npm install` to install dependencies.
4. Run `cp config.js.example config.js` to make your own copy of `config.js`. Update `siteurl` with the url of your own squarespace site, ie: `https://mysite.squarespace.com`

#### Develop
1. Run `gulp`. This will build your site in `/public` and start up `gulp watch`.
2. In a new terminal window, `cd public`. Run `sqs server` to start the server. The default port is `localhost:5050`. (You'll need to enter your squarespace credentials in the browser the first time around.)
3. Make all your changes in `/src`. Gulp will watch for and build any changes you make to `/public`. If you use the [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) chrome extension, your site will reload automatically with your changes.


#### Deploy

##### First time Setup
1. `cd public`, then `git init` to initialize a new git repository in `/public`.
2. Add your squarespace git repo: `git remote add origin https://{{mysite}}.squarespace.com/template.git` where `{{mysite}}` is your squarespace subdomain.

##### Deploy to Squarespace
1. Run `gulp build:deploy` to build your site with revisioned assets.
2. `cd public`, then `git push origin master` (The first time you'll need to do `git push -f origin master` and enter your squarespace credentials.)
