# It's Always Sassy in Philadelphia

Learn how to turn your 2000+ line spaghetti monster CSS file into a modular and manageable collection of components you can reuse! 

Workshop will cover (in 3 hours): 

* overview of how to use Sass (CodeKit / Prepros, Rails, libsass, etc.) 
* breaking things apart (CSS Stats, SublimeText plugins, browser extensions, etc.)
* organizing and naming (SMACSS and BEM) 
* creating reusable components with variables, mixins, extends (DRYing up your code with Sass basics) 
* frameworks (Bootstrap, Foundation, Bourbon, Susy, Breakpoint, etc.)
* build tools (Grunt, Gulp, etc.) 
* other topics we might discuss: PostCSS 

We will work through a number of hands on exercises touching on the topics above. These exercises will require the installation of a number of command line utilities that we will guide you through. It is recommended attendees come to the workshop with a machine capable of running OSX with Homebrew or Linux. Windows users will expected to be able to run a virtual instance of Linux using a tool like VirtualBox.

## Installation

### Requirements (Unix-based machines)

1. Ruby: https://www.ruby-lang.org/en/documentation/installation/
2. Node and NPM: https://nodejs.org/en/download/

### Workshop setup:

1. Clone this repository.
2. Run the following command in your terminal: `bundle install && npm install`
3. Serve up the site locally: `gulp serve`

### Getting sassy without the terminal 

[CodeKit](https://incident57.com/codekit/) (Mac OS X) - CodeKit is a tool to compile Sass, LESS, Stylus, Jade and much more. It comes with Bower so you can import and manage dependencies / libraries simply. It also refreshes browsers across devices.

[Prepros](http://prepros.io) (Windows, Mac OS X and Linux) - Prepros is a tool to compile Sass, LESS, Stylus, Jade and much more with automatic CSS prefixing. It comes with built in server for cross browser testing and automatic browser refresh. 

## Why Sass?

Because.

## Where to Begin? CSS Audit!

> Task #1: Audit your existing CSS file(s)

- [CSS Lint](http://csslint.net/) might hurt your feelings, but will make your code better.
- [Chrome DevTools Audit Panel](https://developer.chrome.com/devtools#audits)  can analyze a page as it loads. Then provides suggestions and optimizations for decreasing page load time and increase perceived (and real) responsiveness.
- [CSS Dig](http://cssdig.com/) is an automated script that runs through all of your code to help you see it visually. A similar tool is [StyleStats](http://www.stylestats.org/) and [CSSStats](http://cssstats.com/), where you type in a url to survey its CSS.
- [Dust-Me Selectors](https://addons.mozilla.org/en-US/firefox/addon/dust-me-selectors/) is an add-on for Firebug in Firefox that finds unused selectors.

## Organizing and Naming Things is Hard

> Task #2: Organize your styles and give them appropriate names

- SMACSS 
- BEM

## Sass Basics

> Task #3: Refactor your CSS file(s) to Sass / Sassy CSS files

## Working with Frameworks & Mixin Libraries

> Task #4: Import framework / mixin libraries

- Bootstrap & Foundation
- Bourbon, Neat, Bitters, Refills
- Susy 
- Breakpoint

## Working with Build Tools

> Task #5: Customize gulpfile

- Gulp 
- Grunt, Broccoli, Brunch, Webpack, Etc.
