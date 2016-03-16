# Washington Leadership Academy
A custom Squarespace website for washingtonleadershipacademy.org

## Waffle
[![Design Stories in Progress](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=design&title=Design)](http://waffle.io/washington-leadership-academy/wla)
[![Dev Stories in Progress](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=dev&title=Dev)](http://waffle.io/washington-leadership-academy/wla)
[![Stories in QA](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=Review%2FQA&title=QA)](http://waffle.io/washington-leadership-academy/wla)
[![Stories in Client Review](https://badge.waffle.io/washington-leadership-academy/wla.svg?label=clientreview&title=Review)](http://waffle.io/washington-leadership-academy/wla)

This project is being designed and developed in the open. Follow along and see our progress on this [Waffle board](https://waffle.io/washington-leadership-academy/wla).

## Development
#### Install

1. Clone this repo.
2. `npm install` to install dependencies.
3. `npm install -g node-squarespace-server` to install [node-squarespace-server](https://github.com/NodeSquarespace/node-squarespace-server).
4. Update server settings in `template/template.conf` as needed

#### Run
1. `cd template`
3. Run `gulp watch` to watch and compile static assets.
3. Run `sqs server` to start the server. The default port is `localhost:5050`.

Note: The first time you run this, you'll need to enter credentials for the squarespace site set in `template/template.conf`.
