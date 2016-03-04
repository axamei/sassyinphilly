---
layout: post
title:  "Working with build tools"
date:   2016-01-14
---

Gulp, Grunt, Broccoli, Brunch, Webpack, npm scripts, etc.

Our gulpfile includes the following tasks:
- Error handling and growl-like notification
- Sourcemaps to help us know where in the source our rules are located
- Sass compilation using libsass
- UnCSS to remove unused CSS selectors and slim down our CSS 
- Concatination and minification of our files
- Autoprefixer to prefix CSS with vendor prefixes
- Using Browsersync for multi-device testing
- Optimizing images
- Building our Jekyll site
- Deploying our site to gh-pages
