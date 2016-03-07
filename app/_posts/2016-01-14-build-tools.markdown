---
layout: post
title:  "Working with Build Tools"
date:   2016-01-14
---

Gulp, Grunt, Broccoli, Brunch, Webpack, npm scripts, etc.

## Gulp

We use [Gulp](http://gulpjs.com/) as our task runner of choice. Our gulpfile includes the following tasks:

- Sass linting to keep the cruft out of our stylesheets
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


## Package Management

- Most Sass libraries and frameworks are now available as [NPM Packages](https://www.npmjs.com/search?q=sass)
- [node-sass](https://www.npmjs.com/package/node-sass) - node wrapper for the [libSass](http://sass-lang.com/libsass), the C-based implementation of Sass. [gulp-sass](https://www.npmjs.com/package/gulp-sass) is a wrapper package around node-sass. 

{% highlight js %}
{
  "private": true,
  "engines": {
    "node": ">=0.12.0"
  },
  "devDependencies": {
    "bootstrap-sass": "^3.3.6",
    "bourbon": "^4.2.6",
    "breakpoint-sass": "^2.6.1",
    "browser-sync": "^2.2.1",
    "del": "^1.1.1",
    "gulp": "^3.9.0",
    "gulp-autoprefixer": "^3.0.1",
    "gulp-cache": "^0.4.2",
    "gulp-concat": "^2.6.0",
    "gulp-cssnano": "^2.1.0",
    "gulp-gh-pages": "^0.5.4",
    "gulp-imagemin": "^2.2.1",
    "gulp-load-plugins": "^0.10.0",
    "gulp-notify": "^2.2.0",
    "gulp-plumber": "^1.0.1",
    "gulp-sass": "^2.0.0",
    "gulp-sass-lint": "^1.1.1",
    "gulp-shell": "^0.5.2",
    "gulp-size": "^1.2.1",
    "gulp-sourcemaps": "^1.5.0",
    "gulp-uglify": "^1.1.0",
    "gulp-uncss": "^1.0.4",
    "jquery": "^2.2.1",
    "node-normalize-scss": "^1.2.0",
    "susy": "^2.2.12"
  }
}
{% endhighlight %}
